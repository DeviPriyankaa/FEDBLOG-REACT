import React from "react";
import Sidebar from "./Sidebar";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";


const Main = () => {
    return (

      
    <div>
      <div className="article">
      <table className="tab">
      <tr><h1 align="left"> Key Events </h1></tr>
      <tr><h2 align="left" id="sample1">Introduction to Keyboard Events in JavaScript</h2>
      <p>Whenever a user presses any key on the Keyboard, different events are fired. 
        There are three keyboard events, namely keydown, keypress, and keyup. Keyboard 
        events belong to the KeyboardEvent object. This tutorial will discuss how to implement
         JavaScript keyboard events.

       One of the most common uses of keyboard events today is computer gaming. Most browser-based
        games require some form of keyboard input. There are different responses from game objects 
        based on the keyboard event. This tutorial will also demonstrate how keyboard events are used in gaming.</p>
        <h2>Types of Keyboard events:</h2>
        <img src={image1} alt="image1" id="sample1" align="center"/>
        </tr>
        <tr align ="left">
        <h2 align ="left" id="sample2">Introduction to JS keyboard Events:</h2>
       <tr>
        <p>There are three different keyboard events in JavaScript:</p>
        <ol>
          <li>
          keydown: Keydown happens when the key is pressed down, and auto repeats if the key is pressed down for long.
          </li>
          <li>
          keypress: This event is fired when an alphabetic, numeric, or punctuation key is pressed down.
          </li>
          <li>
          keyup: Keyup happens when the key is released.
          </li>
        </ol>
        <p>
        Some browsers no longer support keypress event. Refer to the Mozilla documentation for keypress event browser compatibility details.
        </p>
       </tr>
      <tr>
        <p>To record a keydown event in JavaScript, use the code below:</p>
        <img src={image2} alt="image2" id="sample2" align="center"/>
        <p>To record a keypress event in JavaScript, use the code below:</p>
        <img src={image3} alt="image3" id="sample2" align="center"/>
        <p>To record a keyup event in JavaScript, use the code below:</p>
        <img src={image4} alt="image4" id="sample2" align="center"/>
        <p>In the code snippets above, we are adding the addEventListener() method to the document. This attaches the event handler to the window, to listen for the keyboard events.</p>
      </tr>
      </tr>
      <tr align="left">
      <h2 align ="left" id="sample3">KeyboardEvent sequence:</h2>
      <tr>
        <p>
        KeyboardEvent events are fired in the following order:
        <ol>
          <li>
          The first event is the keydown event. If a key that produces a character key which is held further, then the event is repeated.

          </li>
          <li>
          If the keypress event is supported, it is fired next and repeated while the key is pressed down.
          </li>
          <li>
          The last event is the keyup event. It is fired when the key is released.
          </li>
        </ol>
        </p>
      </tr>
      
      </tr>
      <tr align="left">
      <h2 align ="left" id="sample4">Handling keyboard events in JavaScript:</h2>
      <tr>
       <p>
       The Event object is the parent of all event objects. Some of the commonly used event objects are TouchEvent, KeyboardEvent, InputEvent, ClipboardEvent, WheelEvent, and MouseEvent. This tutorial will focus on KeyboardEvent.
       </p><br/>
       <p>
       The event object has two properties, key and code, which allows getting the character and the ‘physical key code’, respectively. The table below shows the event.key and event.code for the character v.
       </p>
       <img src={image5} alt="image5" id="sample4" align="center"/>

      </tr>
      </tr>
      <tr align="left">
      <h2 align ="left" id="sample5">Summary</h2>
      <tr>
      <p>JavaScript keyboard events are used in several ways. This article has demonstrated how we can use JavaScript keyboard events in gaming.</p>
      <ul>To summarize:</ul>
      <li>
      We learned about different keyboard events, and what they are.
      </li>
      <li>
      We implemented keyboard events to create a simple game.
      </li>
      </tr>
      </tr>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </table>

    </div>
    <Sidebar />
    </div>
    )
};

export default Main;
