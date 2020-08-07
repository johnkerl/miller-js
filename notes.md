# VUE/TS NOTES

* install
  * `npm install -g @vue/cli` (global)
  * `vue --version`
* create
  * `vue create miller-js`
    * babel/eslint
    * npm
    * TS
    * etc
* build
  * `cd miller-js`
  * `npm run serve`
  * http://localhost:8080/
* deploy
  * `npm run build`
  * note vue.config.js needs publicPath
  * push to ISP and view via https://.../miller-js/dist/index.html
* files
  * `src/main.ts`
  * `src/App.vue`
  * `src/components/*.vue`
* unit tests
  * `npm run test:unit`
* lint
  * `npm run lint`

# TO DO
* eslint config to allow trailing commas; other dinkum imports
* autolintfix

# COMPONENTS

* https://github.com/vuejs/awesome-vue
* npm install vue-simple-upload
* npm install vue-dropdowns
  * https://github.com/mikerodham/vue-dropdowns
  * see also modules/vue-dropdowns/Dropdown.vue
* npm install @types/vue-filereader ?

# INFRA

* npm install d3
* npm install d3-fetch
* npm install node-fetch
* Everything nodeable as much as possible
* Everything TS regardless of browser-only/nodeable or not
* Vue? since I'm solid with React already

# NODEABLE

* Formats: CSV/TSV, JSON, DKVP, XTAB, PPRINT, NIDX
* Ingestors: formats -> array of object
* Emitters: array of object -> formats
* Verbs
  - Start small
  - Persistable pick-widgets for all options

# UI IDEA

* Persisted (JSON.stringify -> browser-local storage, config-file upload/download, etc.) flows
* Flow-frame can have files dropped into it
* Data files also upload/download//copy/paste
* Copy/paste for Pandas/etc

# SEQUENCING PLAN

* Not at first:
  - Active (1s-callback) update of iterative stats, histogram, etc
  - Pipe-visibility

* Defer:
  - data-dependent dropdowns for verb args (e.g. agg-by)
  - join
  - tee
  - drag/drop of flows ...

* Proof of concept:
  * upload-file button
    - itype via suffix? or selector? even better, auto-infer/default from suffix?
    - itypes at first: JSON, CSV, DKVP
  * table-renderer?
    - yes if CSV only
    - not for ragged
    - how to handle raw text vs parsed structure ...
  * dropdown for mapper(s) -- initially, just one, which is cat
  * otype selector
  * 'go' button for format conversion
  * copy-to-clipboard option for output

