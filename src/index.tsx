

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[

stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "white"
        }})] }})],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.navigation"
        }})
        }})] }}), stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50px"
        }})] }}), 
stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><></>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.flex({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
    stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "230px"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "80px"
        }})] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FlogoFlaxboll.png?alt=media&token=0b90ef25-b31f-443a-8ef3-59084b02bf41"
        }})],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50px"
        }})] }}), 
stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "transparent"
        }})] }}), stls.flex({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Loader pass={{
            size: "small",
            color: ' ',
            args,
        }}/>, (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.flex({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1"
        }})] }}), stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "20px"
        }})] }})],

            variablePath:[jsvals.j8({pass: {
          propertieValues: "sc.home.toggles.loader"
        }})],

            expectedVal:[jsvals.j8({pass: {
          propertieValues: "true"
        }})],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Loader View Test"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "sc.home.toggles.loader"
        }})],
          value: jsvals.j8({pass: {
          propertieValues: "false"
        }})
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "20px"
        }})] }})],

            variablePath:[jsvals.j8({pass: {
          propertieValues: "sc.home.toggles.loader"
        }})],

            expectedVal:[jsvals.j8({pass: {
          propertieValues: "false"
        }})],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [

stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "500px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.navigation"
        }})
        }})] }}), 
stls.alignSelf({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#FFF"
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "My To Do List"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "sc.home.toggles.loader"
        }})],
          value: jsvals.j8({pass: {
          propertieValues: "true"
        }})
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[

stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "500px"
        }})] }}), 
stls.alignSelf({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), stls.borderWidth({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: jsvals.j8({pass: {
          propertieValues: "list.toDoItems"
        }}),

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "500px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item"
        }}),
          args
        }})
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg     xmlns="http://www.w3.org/2000/svg"     width={14}     height={12}     fill="red"     viewBox="0 0 14 12"     {...props}   >     <Path       stroke="#000001"       strokeLinecap="round"       strokeLinejoin="round"       d="m.5 7.55 2.73 3.51a1 1 0 0 0 1.56.03L13.5.55"     />   </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.5 7.55005L3.23 11.06C3.32212 11.1797 3.44016 11.277 3.57525 11.3446C3.71034 11.4121 3.85898 11.4482 4.01 11.45C4.15859 11.4518 4.3057 11.4203 4.44063 11.3581C4.57555 11.2958 4.6949 11.2042 4.79 11.09L13.5 0.550049" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/> </svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#FFF"
        }})],

      args,
    }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => ( <Svg     xmlns="http://www.w3.org/2000/svg"     width={14}     height={14}     fill="red"     viewBox="0 0 14 14"     {...props}   >     <Path       stroke="#000001"       strokeLinecap="round"       strokeLinejoin="round"       d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"     />   </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/> </svg>
      `,

      altura: "15px",

      largura: "35px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#666"
        }})],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "90%"
        }})] }}), 
        stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1px"
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "black"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        
          ],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.navigation"
        }})
        }})] }}), stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

          startFunctions:[()=>{}],

          args,
        }}/>, 
        
        
        () => <>{/*styles library*/}</>, 
        
        () => <>{/*elements library*/}</>
          ];

          const initCt = () => ({
            
        'all': jsvals.j8({pass: {
          propertieValues: { 
        'colors': jsvals.j8({pass: {
          propertieValues: { "navigation": jsvals.j8({pass: {
          propertieValues: "#242434"
        }}) }
        }}), 'toogles': jsvals.j8({pass: {
          propertieValues: { "listLoader": jsvals.j8({pass: {
          propertieValues: "loaded"
        }}) }
        }}) }
        }}), 
        'sc': jsvals.j8({pass: {
          propertieValues: { 'home': jsvals.j8({pass: {
          propertieValues: { 'toggles': jsvals.j8({pass: {
          propertieValues: { "loader": jsvals.j8({pass: {
          propertieValues: "true"
        }}) }
        }}) }
        }}) }
        }}), 'list': jsvals.j8({pass: {
          propertieValues: { 'toDoItems': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: "clean"
        }}), jsvals.j8({pass: {
          propertieValues: "shop"
        }}) ]
        }}) }
        }})
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
