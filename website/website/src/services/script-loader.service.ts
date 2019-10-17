import { Injectable } from '@angular/core';
import { Scripts } from 'src/interfaces/scripts';
import { resolve } from 'url';
import { reject } from 'q';

export const ScriptStore: Scripts[] = [
  {name: 'mapsjs-corejs', src: '//js.api.here.com/v3/3.0/mapsjs-core.js'},
  {name: 'mapsjs-servicejs', src: '//js.api.here.com/v3/3.0/mapsjs-service.js'},
  {name: 'mapsjs-uijs', src: '//js.api.here.com/v3/3.0/mapsjs-ui.js'},
  {name: 'mapsjs-mapeventsjs', src: '//js.api.here.com/v3/3.0/mapsjs-mapevents.js'}
];

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        src: script.src
      };
    });
   }

   load(...scripts: string[]) {
     const promises: any[] = [];
     scripts.forEach((script) => promises.push(this.loadScript(script)));
     return Promise.all(promises);
   }

   loadScript(name: string) {
     return new Promise((resolve, reject) => {
       if (!this.scripts[name].loaded) {    
         //load script
         let script = document.createElement('script');
         script.type = 'text/javascript';
         script.src = this.scripts[name].src;

         //IE Specific
         if (script.readyState) {
           script.onreadystatechange = () => {
             if (script.readyState === "loaded" || script.readyState === "complete") {
               script.onreadystatechange = null;
               this.scripts[name].loaded = true;
               resolve({script: name, loaded: true, status: "Loaded"});
             }
           };
         } else {
           script.onload = () => {
             this.scripts[name].loaded = true;
             resolve({script: name, loaded: true, status: "Loaded"});
           };
         }
         script.onerror = (error: any) => resolve({script: name, loaded: false, status: "Loaded"});
         document.getElementsByTagName('head')[0].appendChild(script);
       }else {
         resolve({script: name, loaded: true, status: "Already Loaded"});
       }
     });
   }
}
