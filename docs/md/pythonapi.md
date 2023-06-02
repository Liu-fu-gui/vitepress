```
import datetime
import requests
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QTextEdit, QPlainTextEdit, QPushButtonclass OpenAIUsageMonitor(QWidget):
    def init(self):
        super().init()
        self.initUI()    def initUI(self):
        self.setWindowTitle('小刘gpt_key额度查询器')        # 创建输入框和标签
self.key_input_label = QLabel("请输入要查询的API Keys:")
        self.key_input = QPlainTextEdit()
        self.key_input.setPlaceholderText("这里输入key，一行一个，不要有其他不必要的符号")        # 创建输出文本框
self.output_text = QTextEdit()
        self.output_text.setReadOnly(True)
        self.output_text.setPlaceholderText("#### 监控key为：#### #### #### #### #### \n"
               "#### 总额:############\n"
               "#### 已用:############\n"
               "#### 剩余:############\n"
)        # 创建运行按钮
self.run_button = QPushButton("点击查询")
        self.run_button.clicked.connect(self.run_monitor)        # 创建垂直布局
layout = QVBoxLayout()
        layout.addWidget(self.key_input_label)
        layout.addWidget(self.key_input)
        layout.addWidget(self.run_button)
        layout.addWidget(self.output_text)        # 设置窗口布局
self.setLayout(layout)
        self.show()    def run_monitor(self):
        self.output_text.clear()
        api_keys = self.key_input.toPlainText().strip().split('\n')
        for i, api_key in enumerate(api_keys):
            api_key = api_key.strip()
            if not api_key:
                continueusage_info = self.get_key(api_key)
            self.output_text.append(f"#### 第 {i + 1}个key的查询数据\n{usage_info}")    def get_key(self, api_key):
        subscription_url = "https://api.openai.com/v1/dashboard/billing/subscription"
headers = {"Authorization": "Bearer " + api_key,
                   "Content-Type": "application/json"}        subscription_response = requests.get(subscription_url, headers=headers)
        if subscription_response.status_code == 200:
            data = subscription_response.json()
            total = data.get("hard_limit_usd")
        else:
            return subscription_response.text        start_date = (datetime.datetime.now() - datetime.timedelta(days=99)).strftime("%Y-%m-%d")
        end_date = (datetime.datetime.now() + datetime.timedelta(days=1)).strftime("%Y-%m-%d")
        billing_url = f"https://api.openai.com/v1/dashboard/billing/usage?start_date={start_date}&end_date={end_date}"
billing_response = requests.get(billing_url, headers=headers)
        if billing_response.status_code == 200:
            data = billing_response.json()
            total_usage = data.get("total_usage") / 100
daily_costs = data.get("daily_costs")
            days = min(10, len(daily_costs))
            recent = f"##### 最近{days}天使用情况  \n"
for i in range(days):
                cur = daily_costs[-i - 1]
                date = datetime.datetime.fromtimestamp(cur.get("timestamp")).strftime("%Y-%m-%d")
                line_items = cur.get("line_items")
                cost = 0
for item in line_items:
                    cost += item.get("cost")
                recent += f"\t{date}\t{(cost / 100):.2f} \n"
else:
            return billing_response.text        return f"\n#### 监控key为：{api_key[:-25] + '*' * 25}\n"                f"#### 总额:\t{total:.2f}  \n"                f"#### 已用:\t{total_usage:.2f}  \n"                f"#### 剩余:\t{total - total_usage:.2f}  \n"                f"\n" + recentif name == 'main':
    app = QApplication(sys.argv)
    monitor = OpenAIUsageMonitor()
    sys.exit(app.exec_())
```
