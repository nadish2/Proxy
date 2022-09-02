import { MainAreaWidget } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { reactIcon } from '@jupyterlab/ui-components';
import { CounterWidget } from './widget';
/**
 * The command IDs used by the react-widget plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.create = 'accessPort';
})(CommandIDs || (CommandIDs = {}));
/**
 * Initialization data for the react-widget extension.
 */
const extension = {
    id: 'access-port',
    autoStart: true,
    optional: [ILauncher],
    activate: (app, launcher) => {
        const { commands } = app;
        const command = CommandIDs.create;
        commands.addCommand(command, {
            caption: 'Access a workspace internal port',
            label: 'Access Port',
            icon: (args) => (args['isPalette'] ? '' : reactIcon),
            execute: () => {
                const content = new CounterWidget();
                const widget = new MainAreaWidget({ content });
                widget.title.label = 'Access Port';
                widget.title.icon = reactIcon;
                app.shell.add(widget, 'main');
            },
        });
        if (launcher) {
            launcher.add({
                command,
            });
        }
    },
};
export default extension;
