var RainbowBlock = React.createClass({
    render: function () {
        return (
            <div className="rainbow-block">
                {this.props.children}
            </div>
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

var Cloud = React.createClass({
    render: function () {
        return (
            <div className='clouds'>
                <div className='cloud left'></div>
                <div className='cloud right'></div>
            </div>
        );
    }
});

ReactDOM.render(
    <RainbowBlock>
        <div className="rainbow">
            <RainbowColor color="red" link="#whoAmI" label="WhoAmI?"/>
            <RainbowColor color="orange" link="#postfolio" label="Portfolio"/>
            <RainbowColor color="yellow" link="#word" label="Word"/>
            <RainbowColor color="green" link="#scapes" label="Scapes"/>
            <RainbowColor color="blue" link="#weather" label="Weather?"/>
            <RainbowColor color="indigo" link="#interest" label="Interest"/>
            <RainbowColor color="violet" link="#whoAmI" label="WhoAmI?"/>
            <RainbowColor color="clear"/>
        </div>
        <Cloud />
    </RainbowBlock>,
    document.getElementById('container')
);