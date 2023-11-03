import{_ as s,o as n,c as a,O as e}from"./chunks/framework.62020867.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/pythonapi.md","filePath":"md/pythonapi.md"}'),t={name:"md/pythonapi.md"},l=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import datetime</span></span>
<span class="line"><span style="color:#A6ACCD;">import requests</span></span>
<span class="line"><span style="color:#A6ACCD;">import sys</span></span>
<span class="line"><span style="color:#A6ACCD;">from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QTextEdit, QPlainTextEdit, QPushButtonclass OpenAIUsageMonitor(QWidget):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def init(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        super().init()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.initUI()    def initUI(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.setWindowTitle(&#39;小刘gpt_key额度查询器&#39;)        # 创建输入框和标签</span></span>
<span class="line"><span style="color:#A6ACCD;">self.key_input_label = QLabel(&quot;请输入要查询的API Keys:&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.key_input = QPlainTextEdit()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.key_input.setPlaceholderText(&quot;这里输入key，一行一个，不要有其他不必要的符号&quot;)        # 创建输出文本框</span></span>
<span class="line"><span style="color:#A6ACCD;">self.output_text = QTextEdit()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.output_text.setReadOnly(True)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.output_text.setPlaceholderText(&quot;#### 监控key为：#### #### #### #### #### \\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">               &quot;#### 总额:############\\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">               &quot;#### 已用:############\\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">               &quot;#### 剩余:############\\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">)        # 创建运行按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">self.run_button = QPushButton(&quot;点击查询&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.run_button.clicked.connect(self.run_monitor)        # 创建垂直布局</span></span>
<span class="line"><span style="color:#A6ACCD;">layout = QVBoxLayout()</span></span>
<span class="line"><span style="color:#A6ACCD;">        layout.addWidget(self.key_input_label)</span></span>
<span class="line"><span style="color:#A6ACCD;">        layout.addWidget(self.key_input)</span></span>
<span class="line"><span style="color:#A6ACCD;">        layout.addWidget(self.run_button)</span></span>
<span class="line"><span style="color:#A6ACCD;">        layout.addWidget(self.output_text)        # 设置窗口布局</span></span>
<span class="line"><span style="color:#A6ACCD;">self.setLayout(layout)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.show()    def run_monitor(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.output_text.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">        api_keys = self.key_input.toPlainText().strip().split(&#39;\\n&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        for i, api_key in enumerate(api_keys):</span></span>
<span class="line"><span style="color:#A6ACCD;">            api_key = api_key.strip()</span></span>
<span class="line"><span style="color:#A6ACCD;">            if not api_key:</span></span>
<span class="line"><span style="color:#A6ACCD;">                continueusage_info = self.get_key(api_key)</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.output_text.append(f&quot;#### 第 {i + 1}个key的查询数据\\n{usage_info}&quot;)    def get_key(self, api_key):</span></span>
<span class="line"><span style="color:#A6ACCD;">        subscription_url = &quot;https://api.openai.com/v1/dashboard/billing/subscription&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">headers = {&quot;Authorization&quot;: &quot;Bearer &quot; + api_key,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   &quot;Content-Type&quot;: &quot;application/json&quot;}        subscription_response = requests.get(subscription_url, headers=headers)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if subscription_response.status_code == 200:</span></span>
<span class="line"><span style="color:#A6ACCD;">            data = subscription_response.json()</span></span>
<span class="line"><span style="color:#A6ACCD;">            total = data.get(&quot;hard_limit_usd&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return subscription_response.text        start_date = (datetime.datetime.now() - datetime.timedelta(days=99)).strftime(&quot;%Y-%m-%d&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        end_date = (datetime.datetime.now() + datetime.timedelta(days=1)).strftime(&quot;%Y-%m-%d&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        billing_url = f&quot;https://api.openai.com/v1/dashboard/billing/usage?start_date={start_date}&amp;end_date={end_date}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">billing_response = requests.get(billing_url, headers=headers)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if billing_response.status_code == 200:</span></span>
<span class="line"><span style="color:#A6ACCD;">            data = billing_response.json()</span></span>
<span class="line"><span style="color:#A6ACCD;">            total_usage = data.get(&quot;total_usage&quot;) / 100</span></span>
<span class="line"><span style="color:#A6ACCD;">daily_costs = data.get(&quot;daily_costs&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            days = min(10, len(daily_costs))</span></span>
<span class="line"><span style="color:#A6ACCD;">            recent = f&quot;##### 最近{days}天使用情况  \\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(days):</span></span>
<span class="line"><span style="color:#A6ACCD;">                cur = daily_costs[-i - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">                date = datetime.datetime.fromtimestamp(cur.get(&quot;timestamp&quot;)).strftime(&quot;%Y-%m-%d&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                line_items = cur.get(&quot;line_items&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                cost = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">for item in line_items:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    cost += item.get(&quot;cost&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                recent += f&quot;\\t{date}\\t{(cost / 100):.2f} \\n&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return billing_response.text        return f&quot;\\n#### 监控key为：{api_key[:-25] + &#39;*&#39; * 25}\\n&quot;                f&quot;#### 总额:\\t{total:.2f}  \\n&quot;                f&quot;#### 已用:\\t{total_usage:.2f}  \\n&quot;                f&quot;#### 剩余:\\t{total - total_usage:.2f}  \\n&quot;                f&quot;\\n&quot; + recentif name == &#39;main&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    app = QApplication(sys.argv)</span></span>
<span class="line"><span style="color:#A6ACCD;">    monitor = OpenAIUsageMonitor()</span></span>
<span class="line"><span style="color:#A6ACCD;">    sys.exit(app.exec_())</span></span></code></pre></div>`,1),p=[l];function o(i,c,r,u,A,C){return n(),a("div",null,p)}const _=s(t,[["render",o]]);export{d as __pageData,_ as default};
