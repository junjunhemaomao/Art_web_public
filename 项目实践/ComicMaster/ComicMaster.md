# ComicMaster漫画生成项目代码概述
![alt text](./ComicMaster_logo.png)   
项目依赖于预先准备的Excel数据文件(剧本驱动设计)和图像资源库。

## 1. Pre_Gen_Frames_Data.py
- 功能: 预处理分镜数据。用于从现有的分镜图像中提取布局数据，这些数据后续可能被用于生成新的漫画页面。
- 主要步骤:
  1. 初始化DataExtractor类
  2. 遍历指定目录中的PNG文件
  3. 对每个图像进行处理:
     - 转换为灰度图像
     - 应用边缘检测
     - 查找轮廓
     - 提取矩形数据
  4. 可选的数据去重
  5. 将提取的数据保存到文本文件

## 2. Excel_Parse.py
- 功能: 通用Excel数据提取函数
- 主要步骤:
  1. 打开指定的Excel文件
  2. 读取指定列的数据
  3. 返回列数据列表

## 3. Data_Dialogue.py
- 功能: 在图像上添加垂直排列的文本
- 主要步骤:
  1. 打开背景图像
  2. 创建可绘制对象
  3. 设置文本内容、字体和颜色
  4. 垂直绘制文本
  5. 保存修改后的图像

## 4. Data_Frames.py
- 功能: 生成漫画分镜数据
- 主要步骤:
  1. 从Excel文件读取分镜标签数据
  2. 根据标签重复次数选择相应的storyboard数据文件
  3. 从选定文件中随机选择一行数据
  4. 返回包含随机选择的分镜数据的列表

## 5. Data_Image.py
- 功能: 为每个分镜生成随机图像路径
- 主要步骤:
  1. 从Excel文件读取图片词汇和分镜标签数据
  2. 根据词汇生成图像文件夹路径
  3. 在每个文件夹中随机选择一个图像
  4. 根据分镜标签将图像路径分组

## 6. Data_Page.py
- 功能: 整合分镜位置和图像数据
- 主要步骤:
  1. 调用Data_Frames.py和Data_Image.py的功能
  2. 将分镜位置数据和图像路径数据组合
  3. 生成包含每个分镜图像和位置信息的数据结构


## 7. Comic_Gen_Final.py
- 功能: 整合了之前的组件，实现了最终的漫画页面生成。
- 主要步骤:
  1. 初始化ImageProcessor类
  2. 从Excel文件读取数据
  3. 生成分镜位置和图像数据
  4. 处理每个分镜:
     - 打开背景图像
     - 创建灰色背景
     - 调整和粘贴颜色图像
     - 绘制边框
  5. 增强图像对比度和亮度
  6. 将图像转换为灰度模式
  7. 保存处理后的图像


系统的工作流程大致如下：
1. 使用Pre_Gen_Frames_Data.py预处理分镜数据
2. 准备Excel文件，包含必要的文本和图像数据
3. 运行Comic_Gen_Final.py，该脚本会：
   - 读取Excel数据
   - 生成分镜布局
   - 选择并放置图像
   - 应用图像处理效果
   - 输出最终的漫画页面

这个系统提供了一个灵活的框架，可以根据预定义的数据和布局模板自动生成漫画页面。
***
## 关于分镜
关于漫画分镜数量的规范确实是一个比较有经验和风格性的问题，各种类型的漫画在不同场景下使用的分镜数量差异很大。一般来说，以下几方面可以帮助得出更合适的漫画分镜数以及相关布局规范：

1. 分镜数量依据类型和节奏
轻松对话场景：通常分镜较多，一页可以有 8-12 格。这些分镜较小，内容以对话为主，节奏较慢。
打斗场景：分镜较大，动感画面较多，通常一页有 4-6 格。这里主要通过较大的画面和动作来传达信息，节奏较快。
剧情高潮或关键镜头：通常使用大幅、甚至单幅大镜头来突出情绪和氛围，可能一页只有 1-3 格。
2. 常见的分镜数量统计
日本漫画：日本的少年漫画中，常见每页的分镜在 5-8 格。少女漫画可能会更为密集，达到 6-12 格。
欧美漫画：欧美超级英雄类漫画通常每页的分镜较少，常见 4-6 格，以突出每一个动作或场景。
3. 分镜布局常见模式
三分割（3-row）布局：常见于横向的三大镜头，适合静态或者慢节奏的情节。这种布局可能会有 3-6 格。
网格（grid）布局：每页分为多个相等大小的格子，适合较多对话和内容密集的场景，每页可能有 9-12 格。
动态布局：包括一些不规则或变化较多的镜头排列方式，适合打斗或快速节奏的情节，通常 5-8 格。
4. 用户体验与阅读习惯
每页分镜数的视觉影响：过多的分镜会让读者感到视觉疲劳，分镜过少则会降低信息密度和节奏感。所以，漫画页面通常有适合的“黄金分镜数”。很多日本漫画的常见经验是每页 5-8 格，既不让读者感到拥挤，也能保持适当的节奏和连贯性。
5. 实际使用的参考标准
调研数据来源：在一些经典漫画中，诸如《火影忍者》、《海贼王》以及《蜘蛛侠》等作品，你会发现每页通常有 4-9 个分镜，偶尔为情节高潮或悬念设置而使用大幅镜头。
分页规律：每本漫画的章节通常是 16-20 页，不同的分镜布局会根据情节调整，分镜总数通常在 80-150 格之间，每页的格数在 6-8 格 较为常见。
6. 调整建议
通过这些经验值，我们可以将每页的分镜格数限制在 4-9 格，并根据场景自动调整，例如对话多的场景可以使用较多分镜，动作场景使用较少分镜。每页超过12格通常会显得过于密集，降低阅读体验。
***
## 整合新版代码
> 实现了更紧凑的结构，更少的代码量
```
import openpyxl
import os
import random
from collections import Counter
from PIL import Image, ImageDraw, ImageEnhance, ImageFont

# 通用功能函数 - 读取Excel指定列数据
def extract_column_data(excel_path, column_index):
    try:
        workbook = openpyxl.load_workbook(excel_path)
        sheet = workbook.active
        return [row[0] for row in sheet.iter_rows(min_row=2, min_col=column_index, max_col=column_index, values_only=True)]
    except Exception as e:
        print(f"读取Excel失败: {e}")
        return None

# 根据词汇列和标签列生成对应的图像路径
def generate_images(config, column_index_words, column_index_labels):
    words_data = extract_column_data(config['excel_path'], column_index_words)
    labels_data = extract_column_data(config['excel_path'], column_index_labels)

    full_paths_with_images = []
    for word, label in zip(words_data, labels_data):
        full_path = os.path.join(config['parent_image_path'], word)
        if os.path.exists(full_path):
            files = os.listdir(full_path)
            random_image = random.choice(files) if files else 'None'
            full_paths_with_images.append(os.path.join(full_path, random_image))
        else:
            full_paths_with_images.append(os.path.join(full_path, 'None'))

    # 统计标签出现次数并按标签分组
    counted_data = Counter(labels_data)
    result_arrays = []
    current_index = 0
    for _, count in counted_data.items():
        result_arrays.append(full_paths_with_images[current_index:current_index + count])
        current_index += count

    return result_arrays

# 从分镜标签中随机生成框架位置数据
def generate_frames(config, labels_data):
    random_lines = []
    count_dict = Counter(labels_data)

    for number, count in count_dict.items():
        file_path = os.path.join(config['storyboard_path'], f'storyboard_data_f{count}.txt')
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                lines = file.readlines()
                random_line = eval(lines[random.randint(0, len(lines) - 1)].strip())
                random_lines.append(random_line)

    return random_lines

# 生成漫画页数据 - 图像和对应位置矩形框
def generate_page_data(images_data, frames_data):
    return [{"images": images, "rectangles": frames} for images, frames in zip(images_data, frames_data)]

# 判断矩形顶点是否在椭圆边界以内
def is_point_in_ellipse(px, py, cx, cy, a, b):
    return ((px - cx) ** 2) / a ** 2 + ((py - cy) ** 2) / b ** 2 <= 1

# 绘制自适应外接椭圆
def draw_adaptive_ellipse(draw, rect_bounds, image_size):
    rect_x1, rect_y1, rect_x2, rect_y2 = rect_bounds
    rect_width = rect_x2 - rect_x1
    rect_height = rect_y2 - rect_y1

    aspect_ratio = rect_width / rect_height
    long_axis = rect_width * 1.1
    short_axis = rect_height * 1.1
    ellipse_center = (image_size[0] // 2, image_size[1] // 2)

    while True:
        rect_corners = [(rect_x1, rect_y1), (rect_x2, rect_y1), (rect_x1, rect_y2), (rect_x2, rect_y2)]
        if all(is_point_in_ellipse(px, py, ellipse_center[0], ellipse_center[1], long_axis / 2, short_axis / 2) for px, py in rect_corners):
            break
        long_axis += 5
        short_axis += 5 / aspect_ratio

    draw.ellipse(
        [(ellipse_center[0] - long_axis // 2, ellipse_center[1] - short_axis // 2),
         (ellipse_center[0] + long_axis // 2, ellipse_center[1] + short_axis // 2)],
        fill=(255, 255, 255, 255),
        outline=(0, 0, 0, 255),
        width=3
    )

# 绘制竖排文字并适应外接椭圆
def vertical_text_with_adaptive_ellipse(text, image_size=(3025, 4299), font_path=r"C:\Windows\Fonts\simhei.ttf", font_size=80, max_chars_per_column=6, column_spacing=10, output_path="word.png"):
    image = Image.new("RGBA", image_size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype(font_path, font_size)

    char_width, char_height = draw.textbbox((0, 0), "测", font=font)[2:4]
    total_chars = len(text)
    total_columns = (total_chars + max_chars_per_column - 1) // max_chars_per_column
    text_block_width = total_columns * char_width + (total_columns - 1) * column_spacing
    text_block_height = min(max_chars_per_column, total_chars) * char_height

    x_start = (image_size[0] - text_block_width) // 2
    y_start = (image_size[1] - text_block_height) // 2

    border_padding = 10
    rect_bounds = (x_start - border_padding, y_start - border_padding,
                   x_start + text_block_width + border_padding,
                   y_start + text_block_height + border_padding)

    draw_adaptive_ellipse(draw, rect_bounds, image_size)

    for col in range(total_columns):
        start_idx = col * max_chars_per_column
        end_idx = min(start_idx + max_chars_per_column, total_chars)
        for i in range(start_idx, end_idx):
            x = x_start + (total_columns - 1 - col) * (char_width + column_spacing)
            y = y_start + (i % max_chars_per_column) * char_height
            draw.text((x, y), text[i], font=font, fill=(0, 0, 0, 255))

    # 保存每个图片，文件名包含行号
    image.save(output_path, "PNG")
    print(f"生成图片: {output_path}")

# 从Excel中读取文本并生成图片
def generate_images_from_excel(excel_path, column_index, output_dir):
    texts = extract_column_data(excel_path, column_index)
    if texts:
        # 创建输出目录（如果不存在的话）
        os.makedirs(output_dir, exist_ok=True)

        for idx, text in enumerate(texts):
            # 跳过 None 或空字符串
            if not text or text.strip() == "":
                continue

            # 生成每个对话框的图片，文件名包含行号
            file_name = os.path.join(output_dir, f"word_row_{idx + 1}.png")
            vertical_text_with_adaptive_ellipse(text, output_path=file_name)
# 处理和生成漫画页
class ImageProcessor:
    def __init__(self, config):
        self.config = config

    def process_image_data(self, image_data, output_path):
        for idx, data in enumerate(image_data):
            # 使用 RGBA 模式以支持透明度
            image = Image.open(self.config['comic_page_template']).convert("RGBA")
            draw = ImageDraw.Draw(image)

            for rectangle, image_path in zip(data["rectangles"], data["images"]):
                max_width, max_height = rectangle[2] - rectangle[0], rectangle[3] - rectangle[1]

                # 创建灰色背景图像 (RGBA) 以支持透明度
                gray_background = Image.new("RGBA", (max_width, max_height), (200, 200, 200))  # 灰色背景

                if os.path.exists(image_path):
                    color_texture = Image.open(image_path).convert("RGBA")  # 保证图片是RGBA模式
                    img_width, img_height = color_texture.size

                    # 调整大小以适应矩形框
                    scale_factor = min(max_width / img_width, max_height / img_height)
                    new_size = (int(img_width * scale_factor), int(img_height * scale_factor))

                    # 使用 LANCZOS 来代替 ANTIALIAS
                    color_texture = color_texture.resize(new_size, Image.Resampling.LANCZOS)

                    # 计算贴图的左上角位置，使图像居中
                    paste_position = ((max_width - new_size[0]) // 2, (max_height - new_size[1]) // 2)

                    # 将PNG图像合并到灰色背景上，透明部分保持不变
                    gray_background.paste(color_texture, paste_position, color_texture)  # 使用color_texture本身作为掩码

                # 将背景图（包括贴图）粘贴到漫画页上
                image.paste(gray_background, (rectangle[0], rectangle[1]), gray_background)  # 使用gray_background本身作为掩码

                # 绘制矩形边框
                draw.rectangle(rectangle, outline="black", width=10)

            # 保存处理后的页面
            output_img_path = f"{output_path}_{idx + 1}.png"
            image.save(output_img_path, "PNG")
            self.process_image(output_img_path, output_img_path)

    def process_image(self, image_path, output_path):
        image = Image.open(image_path)
        image = ImageEnhance.Contrast(image).enhance(0.7)
        image = ImageEnhance.Brightness(image).enhance(1)
        image.convert("L").save(output_path)

# 主函数 - 整合并生成漫画页
def main():
    # 配置信息
    config = {
        'excel_path': "E:\\comic_gen\\excel\\1话.xlsx",  # Excel 文件路径
        'parent_image_path': 'E:\\comic_gen\\words',  # 词汇图片父目录
        'storyboard_path': 'E:\\comic_gen\\storyboard_data',  # 分镜数据目录
        'comic_page_template': "E:\\comic_gen\\Comicpage\\page.png",  # 漫画页模板
        'output_path': "E:\\comic_gen\\Page",  # 输出目录
        'text_output_dir': "E:\\comic_gen\\output"  # 竖排文字输出目录
    }

    column_index_words = 3  # 第三列：图片词汇数据
    column_index_labels = 2  # 第二列：分镜标签数据
    column_index_texts = 4   # 第四列：竖排文字数据

    # 读取Excel并生成数据
    words_data = extract_column_data(config['excel_path'], column_index_words)
    labels_data = extract_column_data(config['excel_path'], column_index_labels)
    images_data = generate_images(config, column_index_words, column_index_labels)
    frames_data = generate_frames(config, labels_data)
    page_data = generate_page_data(images_data, frames_data)

    # 生成竖排文字图片
    generate_images_from_excel(config['excel_path'], column_index_texts, config['text_output_dir'])

    # 处理图像并生成最终页面
    processor = ImageProcessor(config)
    processor.process_image_data(page_data, config['output_path'])
    print('漫画生成完成！')

if __name__ == '__main__':
    main()
```