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
import IterationSample from './chapter6_map/IterationSample';
import IterationSampleUseState from './chapter6_map/IterationSampleUseState';
import IterationSampleAddData from './chapter6_map/IterationSampleAddData';
import IterationSampleDelete from './chapter6_map/IterationSampleDelete';
import LifeCycleSample from './chapter7_component_lifecycle/LifeCycleSample';
import ParentLifeCycleSample
  from './chapter7_component_lifecycle/ParentLifeCycleSample';
import ParentErrorLifeCycle
  from './chapter7_component_lifecycle/ParentErrorLifeCycle';
import Counter from './chapter8_hooks/Counter';
import Info from './chapter8_hooks/Info';
import InfoUseEffect from './chapter8_hooks/InfoUseEffect';
import UseEffectOnlyFirstRender
  from './chapter8_hooks/UseEffectOnlyFirstRender';
import UseEffectFirstRenderSomeParameter
  from './chapter8_hooks/UseEffectFirstRenderSomeParameter';
import UseEffectCleanUp from './chapter8_hooks/UseEffectCleanUp';
import ParentUseEffectCleanUp from './chapter8_hooks/ParentUseEffectCleanup';
import CounterWithUseReducer from './chapter8_hooks/CounterWithUseReducer';
import ReducerInfo from './chapter8_hooks/ReducerInfo';
import Average from './chapter8_hooks/Average';
import UseMemoAverage from './chapter8_hooks/UseMemoAverage';
import UseCallbackAverage from './chapter8_hooks/UseCallbackAverage';
import UseRefAverage from './chapter8_hooks/UseRefAverage';
import LocalVarNotUseRef from './chapter8_hooks/LocalVarNotUseRef';
import LocalVarUseRef from './chapter8_hooks/LocalVarUseRef';
import SassComponent from './chapter9_component_styling/SassComponent';
import CSSModule from './chapter9_component_styling/CSSModule';
import CSSModuleTemplateLiteral
  from './chapter9_component_styling/CSSModuleTemplateLiteral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <p>Inverted CSS Module </p>
      <CSSModuleTemplateLiteral/>
      <p> Test CSS Module</p>
      <CSSModule/>
      <p>Rainbow</p>
      <SassComponent/>
      <p>Local Variable useRef</p>
      <LocalVarUseRef/>
      <p>LocalVar not useRef</p>
      <LocalVarNotUseRef/>
      <p>useRef</p>
      <UseRefAverage/>
      <p>useCallback</p>
      <UseCallbackAverage/>
      <p>UseMemo calculate Average</p>
      <UseMemoAverage/>
      <p>Average with useMemo</p>
      <Average/>
      <p> Input with useReducer </p>
      <ReducerInfo/>
      <p> useReducer Counter</p>
      <CounterWithUseReducer/>
      <p>useEffect return clean up function </p>
      <ParentUseEffectCleanUp/>
      <p>useEffect only run when name parameter change</p>
      <UseEffectFirstRenderSomeParameter/>
      <p> useEffect only first render</p>
      <UseEffectOnlyFirstRender/>
      <p> useEffect example</p>

      <InfoUseEffect/>
      <p> multiple state </p>
      <Info/>
      <p> useState example </p>
      <Counter/>
      <p> Error Lifecycle example </p>
      <ParentErrorLifeCycle/>
      <p> lifecycle change sample</p>
      <ParentLifeCycleSample/>
      <p> ADD DELETE DATA</p>
      <IterationSampleDelete/>
      <p> ADD data </p>
      <IterationSampleAddData/>
      <p> Iteration sample useState</p>
      <IterationSampleUseState/>
      <p> Iteration sample</p>
      <IterationSample/>
      <ParentScrollBox/>
      {/*<ScrollBoxWithPullDownMethod ref={(ref) => this.scrollBox = ref}/>*/}
      {/*<button onClick={() => this.scrollBox.scrollToBottom()}> Pull to bottom </button>*/}

      <ScrollBox/>
      <ValidationSampleWithRefFocus/>
      <RefUsingCreateRef/>
      <ValidationSample/>
      <EventPractice_functional_component_form/>
      <EventPractice_using_functional_components/>
      <EventPractice_using_class_components/>
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
