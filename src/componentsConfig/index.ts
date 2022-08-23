import charts from './charts';
import textEdit from './textEdit';


export default {
  install(app) {
    app.use(charts);
    app.use(textEdit);
  }
}
