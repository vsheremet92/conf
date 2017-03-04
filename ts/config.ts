import { Field } from "./lib/settings.field"
import { JSONProvider } from "./lib/settings.json"
import { Settings } from "./lib/settings"

export class Config extends Settings {
    db = new Field.String('default connection').key('d').description('Database connection string');
    port = new Field.Number().key('p').description('Listen port').val(5000).minMax(1, 65535);
}
//config.db.key('er').key('rt')

/*JSONProvider.loadFromFile('/etc/company/product.json', config);
JSONProvider.loadFromFile('~/.config/product.json', config);*/

//EnvProvider.load(config); // ENV VARS
//CliProvider.load(config);

export var config = new Config();
export default config;

config.init();
//config.port.val(3000);
//config.port(3000);


JSONProvider.load(`{
    "db": "driver=mysql",
    "port": 1
}`, config);
