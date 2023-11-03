---
prev: 
  text: '上一页'
  link: 'md/error/vscode-git.md'
---

## 官方文档：
https://github.com/Mikubill/sd-webui-controlnet/wiki/API#integrating-sdapiv12img

该扩展有 2 个 API：

- 外部代码 API
- Web API 接口

当您想要从另一个扩展控制此扩展时，外部代码 API 非常有用。

当想要从 Web 客户端与扩展通信时，Web API 非常有用。

## [外部代码 API](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#external-code-api)

该扩展定义[`external_code`](https://github.com/Mikubill/sd-webui-controlnet/blob/main/scripts/external_code.py)模块。此模块包含可用于控制扩展以生成的函数。

### [例子](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#examples)

#### [创建 ControlNet 参数](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#create-controlnet-arguments)

要创建自定义参数并将其传递给扩展以生成，请执行以下操作：

```
import importlib
external_code = importlib.import_module('extensions.sd-webui-controlnet.scripts.external_code', 'external_code')

def create_script_args(p: StableDiffusionProcessing):
    models = external_code.get_models()
    cn_units = [
        external_code.ControlNetUnit(
            model=models[0],  # assuming at least 1 model exists
            ...
        ),
        external_code.ControlNetUnit(
            model=models[1],  # assuming at least 2 models exist
            ...
        ),
        ...
    ]
    external_code.update_cn_script_in_processing(p, cn_units)
```



#### [更新现有参数](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#update-existing-arguments)

要从现有脚本运行程序更新 ControlNet 处理单元，请执行以下操作：

```
import importlib
external_code = importlib.import_module('extensions.sd-webui-controlnet.scripts.external_code', 'external_code')

def update_script_args(p: StableDiffusionProcessing):
    cn_units = external_code.get_all_units_in_processing(p)
    cn_units[0].resize_mode = external_code.ResizeMode.RESIZE
    cn_units[0].model = ...
    cn_units[1].image = None
    ...
    external_code.update_cn_script_in_processing(p, updated_units)
```



#### [删除所有 ControlNet 参数](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#remove-all-controlnet-arguments)

要从现有脚本运行程序中删除所有 ControlNet 处理单元，请执行以下操作： （实质上与禁用扩展具有相同的效果）

```
import importlib
external_code = importlib.import_module('extensions.sd-webui-controlnet.scripts.external_code', 'external_code')

def disable_controlnet(p: StableDiffusionProcessing):
    external_code.update_cn_script_in_processing(p, [])
```



## [Web API](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#web-api)

*API 更新：删除了 /controlnet/txt2img 和 /`controlnet/img2img` 路由。``请改用 /`sdapi/v1/txt2img` 和 /`sdapi/v1/img2img` 路由。*

该扩展将以下路由添加到 webui 的 Web API：

- [获取 /`controlnet/model_list`](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetmodel_list)
- [获取 /`controlnet/module_list`](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetmodule_list)
- [开机自检/`controlnet/detect`](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-post-controlnetdetect)
- [获取 /`controlnet/version`](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetversion)
- [/`sdapi/v1/txt2img` 和 /`sdapi/v1/img2img`](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#integrating-sdapiv12img)

所有路由都使用标头。`Content-Type: application/json`

### [路由 GET`/controlnet/model_list` ](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetmodel_list)

获取可用 ControlNet 型号的列表。返回 形式的字典。每个值都是下面描述的对象的“model”属性的有效候选项。`{"model_list": [...]}``"model_list"``ControlNetUnitRequest`

### [路由 GET`/controlnet/module_list` ](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetmodule_list)

获取可用预处理器的列表。返回 形式的字典。每个值都是下面描述的对象的“module”属性的有效候选项。`{"module_list": [...]}``"module_list"``ControlNetUnitRequest`

请求参数：

- `alias_names=true`：是否获取 UI 别名而不是内部键。默认为`false`

### [路由 POST`/controlnet/detect` ](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-post-controlnetdetect)

自行运行预处理器。路由的正文接受具有以下属性的 JSON 对象：

- `"controlnet_module"`：要使用的预处理器。默认为`"none"`
- `"controlnet_input_images"`：要处理的图像。默认为`[]`
- `"controlnet_processor_res"`：预处理器的分辨率。默认为`512`
- `"controlnet_threshold_a"`：预处理器的第一个参数。仅当预处理器接受参数时才生效。默认为`64`
- `"controlnet_threshold_b"`：预处理器的第二个参数，与 usage 相同。默认为`"controlnet_threshold_a"``64`

### [路由 GET`/controlnet/version` ](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#route-get-controlnetversion)

获取正在运行的 API 版本。返回格式为整数的字典，其中为整数。`{"version": n}``n`

当前 API 版本为 。`1`

### [`ControlNetUnitRequest`JSON 对象](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#controlnetunitrequest-json-object)

此对象完全描述 ControlNet 处理单元。它具有以下属性：

- `"input_image"`：要在本机中使用的图像。默认为`null`

- `"mask"`：遮罩pixel_perfect以过滤图像。默认为`null`

- `"module"`：在使用本机进行调节之前，在传递给本机的图像上使用预处理器。接受路由返回的值。默认为`/controlnet/module_list``"none"`

- `"model"`：用于本单元中调节的模型的名称。接受路由返回的值。默认为`/controlnet/model_list``"None"`

- `"weight"`：本机的重量。默认为`1`

- ```
  "resize_mode"
  ```

  ：如何调整输入图像的大小以适应生成的输出分辨率。缺省值为 。接受的值：

  ```
  "Scale to Fit (Inner Fit)"
  ```

  - `0`或：只需将图像大小调整为目标宽度/高度即可`"Just Resize"`
  - `1`或：缩放和裁剪以适合最小尺寸。保持比例。`"Scale to Fit (Inner Fit)"`
  - `2`或：缩放以适合最大尺寸。保持比例。`"Envelope (Outer Fit)"`

- `"lowvram"`：是否用处理时间补偿低 GPU 内存。默认为`false`

- `"processor_res"`：预处理器的分辨率。默认为`64`

- `"threshold_a"`：预处理器的第一个参数。仅当预处理器接受参数时才生效。默认为`64`

- `"threshold_b"`：预处理器的第二个参数，同上同用。默认为`64`

- `"guidance_start"`：该单元开始起作用的发电比例。默认为`0.0`

- `"guidance_end"`：该单位停止产生影响的发电比例。默认为`1.0`

- ```
  "control_mode"
  ```

  ：有关用法，请参阅[相关问题](https://github.com/Mikubill/sd-webui-controlnet/issues/1011)。缺省值为 。接受的值：

  ```
  0
  ```

  - `0`或者：平衡，提示和控制模型之间没有偏好`"Balanced"`
  - `1`或者：提示比模型的影响更大`"My prompt is more important"`
  - `2`或者：ControlNet模型的影响比提示更大`"ControlNet is more important"`

- `"pixel_perfect"`：启用像素完美的预处理器。默认为`false`

### [整合`/sdapi/v1/*2img` ](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#integrating-sdapiv12img)

将对象传递给 ControlNet 脚本的参数列表。`ControlNetUnitRequest`

#### [例子](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#examples-1)

这是要使用的示例：`/sdapi/v1/txt2img`

```
{
  "prompt": "a cinematic shot of an impressive ants war, ant melee, armageddon",
  "sampler_name": "Euler",
  "alwayson_scripts": {
    "controlnet": {
      "args": [
        {
          "input_image": "base64...",
          "model": "diff_control_sd15_depth_fp16 [978ef0a1]"
        }
      ]
    }
  }
}
```



这是要使用的示例：`/sdapi/v1/img2img`

```
{
  "init_images": ["base64..."],
  "sampler_name": "Euler",
  "alwayson_scripts": {
    "controlnet": {
      "args": [
        {
          "module": "depth",
          "model": "diff_control_sd15_depth_fp16 [978ef0a1]"
        }
      ]
    }
  }
}
```



下面是一个用于健全性检查的最小工作示例（此示例每天都在测试，您可以相信它应该始终有效。

```
import io
import cv2
import base64
import requests


from PIL import Image


# A1111 URL
url = "http://127.0.0.1:7860"

# Read Image in RGB order
img = cv2.imread('your_image.jpg')

# Encode into PNG and send to ControlNet
retval, bytes = cv2.imencode('.png', img)
encoded_image = base64.b64encode(bytes).decode('utf-8')

# A1111 payload
payload = {
    "prompt": 'a handsome man',
    "negative_prompt": "",
    "batch_size": 1,
    "steps": 20,
    "cfg_scale": 7,
    "alwayson_scripts": {
        "controlnet": {
            "args": [
                {
                    "input_image": encoded_image,
                    "module": "canny",
                    "model": "control_v11p_sd15_canny [d14c016b]",
                }
            ]
        }
    }
}


# Trigger Generation
response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)

# Read results
r = response.json()
result = r['images'][0]
image = Image.open(io.BytesIO(base64.b64decode(result.split(",", 1)[0])))
image.save('output.png')
```