import React, {Component} from 'react';

export default class App extends Component {

	render() {
		return (
		  <div>
			  <div className="rainbow-area">
				  <div className='container'>
					  <div className='rainbow'>
						  <div className='color' id='red'></div>
						  <div className='color' id='orange'></div>
						  <div className='color' id='yellow'></div>
						  <div className='color' id='green'></div>
						  <div className='color' id='blue'></div>
						  <div className='color' id='indigo'></div>
						  <div className='color' id='violet'></div>
						  <div className='color' id='clear'></div>
						  <div className='clouds'>
							  <div className='cloud left'></div>
							  <div className='cloud right'></div>
						  </div>
					  </div>

				  </div>
			  </div>

			  <div className='text-bg'>
				  <div className='text'><img src='http://image.prntscr.com/image/3bda8ff778074cf7b0a4ee8617124630.png'/>
				  </div>
			  </div>

		  </div>
		);
	}

}
