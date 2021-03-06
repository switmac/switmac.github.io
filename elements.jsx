var BGBox = React.createClass({
	render: function () {
		var style = {
			top: this.props.top,
			right: this.props.right,
			transform: this.props.transform
		};

		return (
		  <div
			className="bg-box"
			style={style}>
			  {this.props.char}
		  </div>
		);
	}
});

var BGDiv = React.createClass({
	render: function () {
		return (
		  <div className="bg-boxes">
			  {this.props.children}
		  </div>
		);
	}
});


var Boxes = React.createClass({
	render: function () {
		return (
		  <BGDiv>
			  <BGBox top="5%" right="5%" transform="rotate(-10deg)" char="A"/>
			  <BGBox top="10%" right="15%" transform="rotate(10deg)" char="B"/>
			  <BGBox top="25%" right="8%" transform="rotate(0deg)" char="C"/>
			  <BGBox top="15%" right="95%" transform="rotate(10deg)" char="D"/>
			  <BGBox top="30%" right="85%" transform="rotate(-10deg)" char="Z"/>
			  <BGBox top="35%" right="15%" transform="rotate(10deg)" char="H"/>
			  <BGBox top="40%" right="70%" transform="rotate(-10deg)" char="M"/>
			  <BGBox top="45%" right="55%" transform="rotate(0deg)" char="G"/>
			  <BGBox top="50%" right="93%" transform="rotate(8deg)" char="O"/>
			  <BGBox top="55%" right="25%" transform="rotate(-8deg)" char="1"/>
			  <BGBox top="60%" right="10%" transform="rotate(-10deg)" char="0"/>
			  <BGBox top="65%" right="40%" transform="rotate(10deg)" char="5"/>
			  <BGBox top="70%" right="55%" transform="rotate(-10deg)" char="6"/>
			  <BGBox top="65%" right="85%" transform="rotate(0deg)" char="8"/>
			  <BGBox top="85%" right="90%" transform="rotate(-10deg)" char="V"/>
			  <BGBox top="85%" right="30%" transform="rotate(0deg)" char="W"/>
			  <BGBox top="85%" right="45%" transform="rotate(7deg)" char="Y"/>
			  <BGBox top="90%" right="50%" transform="rotate(-7deg)" char="X"/>
			  <BGBox top="90%" right="5%" transform="rotate(-7deg)" char="2"/>
			  <BGBox top="80%" right="18%" transform="rotate(-7deg)" char="J"/>
			  <BGBox top="5%" right="45%" transform="rotate(7deg)" char="R"/>
			  <BGBox top="10%" right="58%" transform="rotate(-3deg)" char="I"/>
			  <BGBox top="35%" right="40%" transform="rotate(3deg)" char="B"/>
			  <BGBox top="92%" right="76%" transform="rotate(15deg)" char="S"/>
			  <BGBox top="68%" right="67%" transform="rotate(13deg)" char="9"/>
			  <BGBox top="20%" right="30%" transform="rotate(-12deg)" char="T"/>
			  <BGBox top="8%" right="72%" transform="rotate(-9deg)" char="E"/>
		  </BGDiv>
		);
	}
});

var RainbowColor = React.createClass({
	render: function () {
		return (
		  <div className='color' id={this.props.color}>
			  {this.props.link &&
			  <div className="link">
				  <a href={this.props.link}>{this.props.label}</a>
			  </div>}
		  </div>
		);
	}
});

var RainbowBlock = React.createClass({
	render: function () {
		return (
		  <div className="rainbow-block">
			  {this.props.children}
		  </div>
		);
	}
});

var RainbowCloud = React.createClass({
	render: function () {
		return (
		  <div className="clouds">
			  <Cloud styleClass="left"/>
			  <Cloud styleClass="right"/>
		  </div>
		);
	}
});


var Cloud = React.createClass({
	render: function () {
		return (
		  <div className={"cloud "+this.props.styleClass}></div>
		);
	}
});


var Rainbow = React.createClass({
	render: function () {
		return (
		  <RainbowBlock>
			  <div className="area">
				  <div className="rainbow">
					  <RainbowColor color="red" link="#whoAmI" label="WhoAmI?"/>
					  <RainbowColor color="orange" link="#portfolio" label="Portfolio"/>
					  <RainbowColor color="yellow" />
					  <RainbowColor color="green" />
					  <RainbowColor color="blue" />
					  <RainbowColor color="indigo" />
					  <RainbowColor color="violet" />
					  <RainbowColor color="clear"/>
				  </div>
				  <RainbowCloud />
			  </div>
		  </RainbowBlock>
		);
	}
});

var CloudAnimation = React.createClass({
	render: function () {
		return (
		  <div id="clouds-bg">
			  <Cloud styleClass="x1"/>
			  <Cloud styleClass="x2"/>
			  <Cloud styleClass="x3"/>
			  <Cloud styleClass="x4"/>
			  <Cloud styleClass="x5"/>
		  </div>
		);
	}
});

var Sun = React.createClass({
	render: function () {
		return (
		  <svg id="sun" width="400" height="400">
			  <polygon
				points="200 100 150 50 125 125 50 150 100 200 50 250 125 275 150 350 200 300 250 350 275 275 350 250 300 200 350 150 275 125 250 50"></polygon>
			  <circle cx="200" cy="200" r="110"/>
		  </svg>
		);
	}
});

ReactDOM.render(
  <div className="contents">
	  <Sun />
	  <CloudAnimation />
	  <div className='text-bg'>
		  <div className='text'>
			  <img src='http://image.prntscr.com/image/3bda8ff778074cf7b0a4ee8617124630.png'/>
		  </div>
	  </div>
	  <Rainbow />
  </div>,
  document.getElementById('container')
);
