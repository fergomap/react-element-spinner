import React, {Component, FormEvent, ReactElement} from 'react';
import { SpinnerComponent } from 'react-element-spinner';
import './App.scss';
import {CustomSpinner} from './components/custom-spinner/custom-spinner.component';

export default class App extends Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      loading: false,
      globalLoading: false,
      isSubmitting: false
    };

    this.loadGlobal = this.loadGlobal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  loadGlobal() {
    this.setState({globalLoading: true});
    setTimeout(() => this.setState({globalLoading: false}), 1500);
  }

  onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({isSubmitting: true});
    setTimeout(() => this.setState({isSubmitting: false}), 1500);
  }

  render(): ReactElement {
    return <div>
      <div>
        <h1>React element spinner demo</h1>
      </div>
      <div className="margin-bottom button-container">
        <SpinnerComponent loading={this.state.globalLoading} position="global" />
        <button onClick={this.loadGlobal} className="margin-bottom">
          {this.state.globalLoading ? 'SHOWING GLOBAL SPINNER...' : 'SHOW GLOBAL SPINNER'}
        </button>
        <button onClick={() => this.setState({loading: !this.state.loading})} className="margin-bottom">
          {this.state.loading ? 'HIDE ELEMENT SPINNERS' : 'LOAD ELEMENT SPINNERS'}
        </button>
      </div>
      <div className="margin-bottom">
        <h4>Button spinner</h4>
        <div className="button-container">
          <button>
            Button default spinner
            <SpinnerComponent loading={this.state.loading} position="inline" color="#498DFF"/>
          </button>
          <button>
            Button dots spinner
            <SpinnerComponent loading={this.state.loading} position="inline" spinnerType="circle-dots"/>
          </button>
          <button>
            Button dots collapse spinner
            <SpinnerComponent loading={this.state.loading} position="inline" spinnerType="circle-dots-collapse"/>
          </button>
          <button>
            Button custom spinner
            <SpinnerComponent loading={this.state.loading} position="inline" customSpinner={<CustomSpinner/>}/>
          </button>
          <button className="big-button">
            Big button
            <SpinnerComponent loading={this.state.loading} position="inline" spinnerType="circle-dots"/>
          </button>
        </div>
      </div>

      <div>
        <SpinnerComponent loading={this.state.loading} position="centered" color="#FF1493" secondaryColor="pink" backgroundColor="black" resize={true}/>
        <h4>Div with resizable default spinner with custom colors</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <p className="hidden-mobile">Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.</p>
        <p className="hidden-mobile">Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.</p>
        <p className="hidden-mobile">Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.</p>
      </div>
      <form noValidate={true} onSubmit={this.onSubmit}>
        <SpinnerComponent loading={this.state.isSubmitting} position="centered" customSpinner={<CustomSpinner/>}/>
        <h4>Form with custom spinner</h4>
        <label>Name</label>
        <input type="text" placeholder="Name"/>
        <label>Password</label>
        <input type="password" placeholder="Password"/>
        <label>Address</label>
        <input type="text" placeholder="Address"/>
        <label>Phone</label>
        <input type="phone" placeholder="Phone"/>
        <button>SUBMIT</button>
      </form>
    </div>;
  }
}
