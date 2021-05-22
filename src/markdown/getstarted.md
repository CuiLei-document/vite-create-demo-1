#开始使用
请先 [安装](#/doc/install)

然后在你的代码中写入下面的代码
<pre><code>import {Button, Tabs, Switch, Dialog} from "king-ui"</code></pre>
        
就可以使用我提供的组件了。

### Vue 单文件组件
代码示例:
<pre><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;Button&gt;
         按钮
        &lt;/Button&gt;
     &lt;/div&gt;
    &lt;/template&gt;
&lt;script&gt;
    import {Button, Tabs, Switch, Dialog} from "king-ui"
        export default {
            components: {Button}
        }
 &lt;script&gt
 </code></pre>
