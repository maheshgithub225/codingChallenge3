import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  listening(){
    fetch('https://challenge3-survey.mybluemix.net/api/speech-to-text/token')
  .then(function(response)  {
      return response.text();
  }).then( (token) => {
    console.log("token:" , token)
    var stream = recognizeMic({
        token: token,
        objectMode: true, // send objects instead of text
        extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
        format: false // optional - performs basic formatting on the results such as capitals an periods
    });
    stream.on('data', (data) => {
      this.setState({
        text: data.alternatives[0].transcript
      })

      var txt = JSON.stringify(this.state.text);
      if (txt.includes("Facebook") || txt.includes("facebook")){
                window.open("https://www.facebook.com/CreativeTim") 
            } else if (txt.includes("Github") || txt.includes("get hub")){
                window.open("https://www.github.com/CreativeTimOfficial/paper-kit");
            } else if (txt.includes("Instagram") || txt.includes("instagram")){
                window.open("https://www.instagram.com/CreativeTimOfficial");
            
            } 
      if(txt.includes("Ready") || txt.includes("ready"))
      {
        {this.bottom()}
      }else if(txt.includes("Next") || txt.includes("next") || txt.includes("ext"))
      {
        {this.nextquestion()}
      }else if(txt.includes("Done") || txt.includes("done"))
      {
        {this.done()}
      }

    });
    stream.on('error', function(err) {
        console.log(err);
    });
    document.querySelector('#stop').onclick = stream.stop.bind(stream);
  }).catch(function(error) {
      console.log(error);
  });
  }
  bottom() {
    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
    
    body.scrollTop += 1000;
    html.scrollTop += 1000;
    document.getElementById('name').style.display = 'block';
    document.getElementById('challenge').style.display = 'none';
    document.getElementById('rating').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
  }
  nextquestion() {
    {
      document.getElementById('name').style.display = 'none';
      document.getElementById('challenge').style.display = 'block';
      document.getElementById('rating').style.display = 'none';
      document.getElementById('feedback').style.display = 'none';
    }
    {
      document.getElementById('name').style.display = 'none';
      document.getElementById('challenge').style.display = 'none';
      document.getElementById('rating').style.display = 'block';
      document.getElementById('feedback').style.display = 'none';
    }

  }
  done() {
    document.getElementById('name').style.display = 'none';
      document.getElementById('challenge').style.display = 'none';
      document.getElementById('rating').style.display = 'none';
      document.getElementById('feedback').style.display = 'block';
  }

  init() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('challenge').style.display = 'none';
    document.getElementById('rating').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.listening.bind(this)}> Click here to record </button>
        </div>
        <div>{this.init()}</div>
        
      </div>
    );
  }
}

export default App;
