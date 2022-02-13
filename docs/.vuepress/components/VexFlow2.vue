<template>

  <div ref="score"></div>

</template>

<script>

const Vex = require('vexflow');

const VF = Vex.Flow;

export default {
  name: 'VexFlow',
  data() {
    return {
      clefs : Array,
      measures : Array
    }
  },
  props : {
      //measures : Array,
      systemWidth : Number,

        // can be piano, organ, choral
      scoreType : String,

      treble : Array,
      treble2 : Array,
      bass : Array,
      bass2 : Array,

      soprano : Array,
      alto : Array,
      tenor : Array,
      bass : Array,

      pedal : Array,

      // orchestral lines?
      // other choral parts?


  }, 
  methods : {

      // takes a VexFlow duration and dots and convert to float
    addBeats(note)
    {
        let beatDurations = {'1/2':8, 'w':4, 'h':2, 'q': 1, '8':.5, '16':.25, '32':.125}

        let beats = beatDurations[note.duration];

        let dots = 0;
        if(typeof note.dots != 'undefined')
        {
            dots = note.dots;
            let dotAddition = beatDurations[note.duration]/2;

            if(dots == 2)
              beats += dotAddition/2;

            beats += dotAddition;

        }

        return beats;
    },
    setupClefs()
    {
        if(this.scoreType == 'piano')
        {
            this.clefs.push(this.treble);
            this.clefs.push(this.bass);
        }

    },
    drawClef(clef) {

    }
  },
  
  mounted() {

    this.setupClefs();


      //console.log(this['treble']);

    // Create an SVG renderer and attach it to the div
    var div = this.$refs.score;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    // Size our svg:
    renderer.resize(this.systemWidth, 150);
    // And get a drawing context:
    var context = renderer.getContext();

    // start x position
    var x = 10;

console.log(this.clefs);
    //this.measures
    this.clefs.forEach((clef) => {
          this.drawClef(clef);
    });
    this.measures = [];

this.measures.forEach((measure, index) => {

    // naive approach of guessing a good width based on number of notes
    var width = measure.notes.length*60;
    if(width == 0)
      width = 500;

    // position created at x,y, width
    var stave = new VF.Stave(x, 5, width);
   // console.log(this.systemWidth/this.measures.length);
   // console.log(measure.notes.length);

   // var stave2 = new VF.Stave(x, 100, 220);

    // Add a clef and time signature.
    if(index == 0)
    {
        stave.addClef("treble");
      //  stave2.addClef('bass');
    }
    
    if(typeof measure.key != 'undefined')
        stave.setKeySignature(measure.key);

    //.addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
    //stave2.setContext(context).draw();

    let beats = 0;
    let notes = [];


    measure.notes.forEach((note) => {


        beats += this.addBeats(note);

      // main note declaration
        let sn = new VF.StaveNote({
                clef: 'treble',
                keys: [note.key],
                duration: note.duration,
                dots : note.dots,
               
            });
             //auto_stem : true ... causes problems with beaming
            // stem_direction : 1 or -1

        if(note.dots > 0)
            sn.addDotToAll();

        if(typeof note.text != 'undefined')
            sn.addAnnotation(0, new VF.Annotation(note.text).setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM))

        if(typeof note.stem != 'undefined')
        {
            if(note.stem == 'hide')
                sn.getStem().setVisibility(false);
        }

        notes.push(sn);

    });
    
    // look for beaming, this and ties are rendered separately
    let beams = [];
    if(typeof measure.beams != 'undefined')
    {
      for(let i = 0; i < measure.beams.length; i++)
      {
         var group = notes.slice(measure.beams[i][0], measure.beams[i][1] + 1);
         //console.log(group)
         let beamGroup = new Vex.Flow.Beam(group);
         //beamGroup.setDirection(1);
         beams.push(beamGroup);
         
      }
    }
    // look for ties
    let ties = [];
    if(typeof measure.ties != 'undefined')
    {
      for(let i = 0; i < measure.ties.length; i++)
      {
        let tieNote1 = measure.ties[i][0];
        let tieNote2 = measure.ties[i][1];

        let tie = new VF.StaveTie({
                  first_note: notes[tieNote1],
                  last_note: notes[tieNote2],
                  first_indices: [0],
                  last_indices: [0],
                  
                })
                //.setDirection(-1)
        ties.push(tie);
      }

    }


    //console.log('beats: ' + beats);

    // Create a voice in 4/4 and add above notes
    var voice = new VF.Voice({num_beats: beats,  beat_value: 4});
    voice.addTickables(notes);

    var formatter = new VF.Formatter();
    formatter.joinVoices([voice]).format([voice], width-60);

    // draw notes
    voice.draw(context, stave);

    // draw the beams
    beams.forEach((beam) => {
      beam.setContext(context).draw();
    });
    // draw the ties
    ties.forEach((t) => {
      t.setContext(context).draw()
    });

    // draw the ties
    

    x+= width;

});

  }
}

</script>

<style scoped>

</style>