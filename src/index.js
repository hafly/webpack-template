import printMe from './print.js';
import _ from 'lodash';
import './styles.css';

function component() {
    console.log(_.join(['Hello', 'webpack'], ' '))
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = 'Hello webpack';
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

// 开启热更新后动态更新内容不会刷新页面
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}