---
prev: 
  text:  'vscode-git-443'
  link: 'md/error/vscode-git.md'
next:
  text: 'sd-github-api'
  link: 'md/sd/sd-github-api.md'
---

# stable diffusion API 调用，超级详细代码示例和说明



本文主要介绍 stable diffusion API 调用，准确来说是对 stable diffusion webui 的 API 调用。接口文档可以查看：


> [ http://sd-webui.test.cn/docs](http://sd-webui.test.cn/docs)

这里的 `sd-webui.test.cn` 是自己的 sd webui Endpoint。

文生图是：`/sdapi/v1/txt2img` 这个 POST 接口。

图生图是：`/sdapi/v1/img2img` 这个 POST 接口。

本文主要介绍文生图 txt2img 接口。

## 文生图 txt2img 接口

以下是添加了两个 ControlNet，4 批次，每批次生成 1 张图，并指定了基础模型、VAE 等的入参 JSON：

```
{
  "alwayson_scripts": {
    "controlnet": {
      "args": [
        {
          "control_mode": 0,
          "enabled": true,
          "guidance_end": 0.5,
          "guidance_start": 0.0,
          "input_image": "base64SrcImg",
          "lowvram": false,
          "model": "control_v11p_sd15_softedge [a8575a2a]",
          "module": "softedge_pidinet",
          "pixel_perfect": true,
          "processor_res": 0,
          "resize_mode": 1,
          "threshold_a": 0,
          "threshold_b": 0,
          "weight": 0.3
        },
        {
          "control_mode": 0,
          "enabled": true,
          "guidance_end": 0.5,
          "guidance_start": 0.0,
          "input_image": "base64SrcImg",
          "lowvram": false,
          "model": "control_v11f1p_sd15_depth [cfd03158]",
          "module": "depth_midas",
          "pixel_perfect": true,
          "processor_res": 0,
          "resize_mode": 1,
          "threshold_a": 0,
          "threshold_b": 0,
          "weight": 0.75
        }
      ]
    }
  },
  "batch_size": 4,
  "cfg_scale": 7,
  "height": 512,
  "negative_prompt": "EasyNegative, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans,extra fingers,fewer fingers,strange fingers,bad hand,backlight, (worst quality, low quality:1.4), watermark, logo, bad anatomy,lace,rabbit,back,",
  "override_settings": {
    "sd_model_checkpoint": "chosenMix_chosenMix.ckpt [dd0aacadb6]",
    "sd_vae": "pastel-waifu-diffusion.vae.pt"
  },
  "clip_skip": 2,
  "prompt": ",(best quality:1.25),( masterpiece:1.25), (ultra high res:1.25), (no human:1.3),<lora:tachi-e:1>,(white background:2)",
  "restore_faces": false,
  "sampler_index": "DPM++ SDE Karras",
  "sampler_name": "",
  "script_args": [
  ],
  "seed": -1,
  "steps": 28,
  "tiling": false,
  "width": 512
}
```

其中 ControlNet 参数解释可以参考：
[ sd-webui-controlnet 接口调用 API 文档](https://github.com/Mikubill/sd-webui-controlnet/wiki/API#integrating-sdapiv12img)

- input_image : 用于此单元的图像。默认为 null
- mask : 用于过滤图像的掩码 pixel_perfect。默认为 null
- module : 在将图像传递给此单元之前在其上使用的预处理器。接受/controlnet/module_list 路由返回的值。默认为 none
- model : 用于此单元中的调节的模型的名称。接受/controlnet/model_list 路由返回的值。默认为 None
- weight : 此单元的权重。默认为 1
- resize_mode : 如何调整输入图像以适应生成的输出分辨率。默认为 Scale to Fit (Inner Fit)。接受的值为：

- 0 或 Just Resize：只需将图像调整为目标宽度/高度
- 1 或 Scale to Fit (Inner Fit)：按比例缩放和裁剪以适应最小尺寸。保持比例。
  2 或 Envelope (Outer Fit)：按比例缩放以适应最大尺寸。保持比例。
  lowvram : 是否通过处理时间来补偿低 GPU 内存。默认为 false
  processor_res : 预处理器的分辨率。默认为 64
  threshold_a : 预处理器的第一个参数。仅在预处理器接受参数时生效。默认为 64

- threshold_b : 预处理器的第二个参数，用法与上述相同。默认为 64
- guidance_start : 此单元开始发挥作用的生成比例。默认为 0.0
- guidance_end : 此单元停止发挥作用的生成比例。默认为 1.0
- control_mode : 有关用法，请参见相关问题。默认为 0。接受的值为：

- 0 或 Balanced：平衡，对提示和控制模型没有偏好
- 1 或 My prompt is more important：提示比模型更有影响力
- 2 或 ControlNet is more important：控制网络模型比提示更有影响力

- pixel_perfect : 启用像素完美的预处理器。默认为 false