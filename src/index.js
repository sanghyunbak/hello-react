import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppVarTest from './AppVarTest';
import reportWebVitals from './reportWebVitals';
import AppNull from './null_test';
import AppAddStyle from './app_add_style';
import AppAddStyleDirect from './app_add_style_direct';
import AppTestCss from './add_css';
import StateTest from './state_test';
import StateTestWithoutConstructor from './state_class_wo_constructor';
import SyncSetStateWithArrowFunction from './sync_setState_with_arrow_function';
import CallBack from './chapter3_component/call_back';
import Say from './chapter3_component/Say';
import SayColor from './chapter3_component/SayColor';
import EventPractice from './chapter4_event_hendling/EventPractice';
import EventPracticeOnChange
  from './chapter4_event_hendling/EventPracticeOnChange';
import EventPracticeWithState
  from './chapter4_event_hendling/EventPracticeWithState';
import EventPractice_using_method
  from './chapter4_event_hendling/EventPractice_using_class_components';
import EventPractice_using_functional_components
  from './chapter4_event_hendling/EventPractice_using_functional_components';
import EventPractice_using_class_components
  from './chapter4_event_hendling/EventPractice_using_class_components';
import EventPractice_functional_component_form
  from './chapter4_event_hendling/EventPractice_functional_component_form';
import ValidationSample from './chapter5_ref/ValidationSample';
import RefUsingCreateRef from './chapter5_ref/RefUsingCreateRef';
import ValidationSampleWithRefFocus
  from './chapter5_ref/ValidationSampleWithRefFocus';
import ScrollBox from './chapter5_ref/ScrollBox';
import ScrollBoxWithPullDownMethod
  from './chapter5_ref/ScrollBoxWithPullDownMethod';
import ParentScrollBox from './chapter5_ref/ParentScrollBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ParentScrollBox />
      {/*<ScrollBoxWithPullDownMethod ref={(ref) => this.scrollBox = ref}/>*/}
      {/*<button onClick={() => this.scrollBox.scrollToBottom()}> Pull to bottom </button>*/}

      <ScrollBox />
      <ValidationSampleWithRefFocus />
      <RefUsingCreateRef />
      <ValidationSample />
      <EventPractice_functional_component_form />
      <EventPractice_using_functional_components />
      <EventPractice_using_class_components />
      <EventPracticeWithState/>
      <EventPracticeOnChange/>
      <EventPractice/>
      {/*<SayColor/>*/}
      {/*<Say/>*/}
      {/*<CallBack/>*/}
      {/*<SyncSetStateWithArrowFunction/>*/}
      {/*<StateTestWithoutConstructor/>*/}
      {/*<StateTest/>*/}
      {/*<AppTestCss/>*/}
      {/*<AppAddStyleDirect/>*/}
      {/*<AppAddStyle/>*/}
      {/*<AppNull/>*/}
      {/*<AppVarTest/>*/}
      {/*<App/>*/}
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
