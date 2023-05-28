<template>

  <div ref="score"></div>

</template>

<script>

// set note spacing?
// setExtraLeftPx()

import { Vex, Stave, StaveNote, Formatter, Dot } from 'vexflow'

const VF = Vex.Flow;

import Liturgy from '../src/liturgy.json';


export default {
  name: 'VexFlow',
  data() {
    return {
      liturgy : Liturgy
    }
  },
  computed : {

    scoreMeasures() {


      if(typeof this.measures == 'undefined')
      {
        
        if(this.scoreId > 0)
        {
          
          for(let i = 0; i < this.liturgy.length; i++)
          {
            if(this.liturgy[i].id == this.scoreId)
              return this.liturgy[i].score;
          }
        }
        return [];
      } else
        return this.measures;
    }
  },
  props : {
      measures : Array,
      systemWidth : Number,
      scoreId : { default : 0, type: Number}

  }, 
  mounted() {

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = this.$refs.score; //document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
// Size our svg:
renderer.resize(this.systemWidth, 150);
// And get a drawing context:
var context = renderer.getContext();

var x = 5;

let beatDurations = {'1/2':8, 'w':4, 'h':2, 'q': 1, '8':.5, '16':.25, '32':.125}


this.scoreMeasures.forEach((measure, index) => {

    // Create a stave at position 10, 40 of width 220 on the canvas.

    // naive approach of guessing a good width based on number of notes
    var width = measure.notes.length*60+70;
    if(width == 0)
      width = 500;

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
    if(typeof measure.time != 'undefined')
    {
        stave.setTimeSignature(measure.time);
        width += 30;
    }

    //.addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
//    stave.setContext(context).draw();
    //stave2.setContext(context).draw();

    let beats = 0;
    let notes = [];
    let numNotes = measure.notes.length;
    let noteLength = 0

    measure.notes.forEach((note) => {

        noteLength = note.duration.split('r')[0]

        beats += beatDurations[noteLength];

        let dots = 0;
        if(typeof note.dots != 'undefined')
        {
            dots = note.dots;
            let dotAddition = beatDurations[noteLength]/2;

            if(dots == 2)
              beats += dotAddition/2;

            beats += dotAddition;

        }

      // main note declaration
        let sn = new VF.StaveNote({
                clef: 'treble',
                keys: [note.key],
                duration: note.duration,
                dots : dots,
               // align_center: true
               
            });
             //auto_stem : true ... causes problems with beaming
            // stem_direction : 1 or -1

        if(dots > 0)
        {
            //const dot = new Dot();
            
            //dot.setDotShiftY(sn.glyph.dot_shiftY);
            Dot.buildAndAttach([sn], { all : true })
            //sn.addModifier(dot, 0);
            
        }
            //sn.addDotToAll();

        if(typeof note.text != 'undefined')
            sn.addModifier(new VF.Annotation(note.text).setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM), 0)
            //sn.addAnnotation(0, new VF.Annotation(note.text).setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM))

        if(typeof note.stem != 'undefined')
        {
            if(note.stem == 'hide')
                sn.getStem().setVisibility(false);
        }

        //console.log(sn.getExtraLeftPx());
        //console.log(sn.getExtraRightPx());
       // console.log(sn.getWidth());

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

    // adjust stave for number of beats to give a better weighting
    width += beats*5;
    stave.setWidth(width);
    //console.log(beats)
    //console.log('beats: ' + beats);

    // Create a voice in 4/4 and add above notes
    var voice = new VF.Voice({num_beats: beats,  beat_value: 4});
    voice.addTickables(notes);

    var formatter = new VF.Formatter();
    formatter.joinVoices([voice]).format([voice], width - 60);

  // debugging
    if(this.scoreId == 5)
    {
      notes.forEach((note, index)=> {
      //console.log(note.getWidth());
      //if(index == 0)
        //note.getTickContext().setExtraRightPx(50);
      // getXShift()
      // getX()
      });
    }
    // draw notes

    stave.setContext(context).draw();
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
