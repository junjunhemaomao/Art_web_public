import{_ as n,o as s,c as p,ag as e}from"./chunks/framework.Bx1bucHt.js";const l="/Art_web_public/assets/ComicMaster_logo.D5GhmIbU.png",u=JSON.parse('{"title":"ComicMaster漫画生成项目代码概述","description":"","frontmatter":{},"headers":[],"relativePath":"项目实践/ComicMaster/ComicMaster.md","filePath":"项目实践/ComicMaster/ComicMaster.md"}'),i={name:"项目实践/ComicMaster/ComicMaster.md"};function t(c,a,o,_,r,m){return s(),p("div",null,[...a[0]||(a[0]=[e('<h1 id="comicmaster漫画生成项目代码概述" tabindex="-1">ComicMaster漫画生成项目代码概述 <a class="header-anchor" href="#comicmaster漫画生成项目代码概述" aria-label="Permalink to &quot;ComicMaster漫画生成项目代码概述&quot;">​</a></h1><p><img src="'+l+`" alt="alt text"><br> 项目依赖于预先准备的Excel数据文件(剧本驱动设计)和图像资源库。</p><h2 id="_1-pre-gen-frames-data-py" tabindex="-1">1. Pre_Gen_Frames_Data.py <a class="header-anchor" href="#_1-pre-gen-frames-data-py" aria-label="Permalink to &quot;1. Pre_Gen_Frames_Data.py&quot;">​</a></h2><ul><li>功能: 预处理分镜数据。用于从现有的分镜图像中提取布局数据，这些数据后续可能被用于生成新的漫画页面。</li><li>主要步骤: <ol><li>初始化DataExtractor类</li><li>遍历指定目录中的PNG文件</li><li>对每个图像进行处理: <ul><li>转换为灰度图像</li><li>应用边缘检测</li><li>查找轮廓</li><li>提取矩形数据</li></ul></li><li>可选的数据去重</li><li>将提取的数据保存到文本文件</li></ol></li></ul><h2 id="_2-excel-parse-py" tabindex="-1">2. Excel_Parse.py <a class="header-anchor" href="#_2-excel-parse-py" aria-label="Permalink to &quot;2. Excel_Parse.py&quot;">​</a></h2><ul><li>功能: 通用Excel数据提取函数</li><li>主要步骤: <ol><li>打开指定的Excel文件</li><li>读取指定列的数据</li><li>返回列数据列表</li></ol></li></ul><h2 id="_3-data-dialogue-py" tabindex="-1">3. Data_Dialogue.py <a class="header-anchor" href="#_3-data-dialogue-py" aria-label="Permalink to &quot;3. Data_Dialogue.py&quot;">​</a></h2><ul><li>功能: 在图像上添加垂直排列的文本</li><li>主要步骤: <ol><li>打开背景图像</li><li>创建可绘制对象</li><li>设置文本内容、字体和颜色</li><li>垂直绘制文本</li><li>保存修改后的图像</li></ol></li></ul><h2 id="_4-data-frames-py" tabindex="-1">4. Data_Frames.py <a class="header-anchor" href="#_4-data-frames-py" aria-label="Permalink to &quot;4. Data_Frames.py&quot;">​</a></h2><ul><li>功能: 生成漫画分镜数据</li><li>主要步骤: <ol><li>从Excel文件读取分镜标签数据</li><li>根据标签重复次数选择相应的storyboard数据文件</li><li>从选定文件中随机选择一行数据</li><li>返回包含随机选择的分镜数据的列表</li></ol></li></ul><h2 id="_5-data-image-py" tabindex="-1">5. Data_Image.py <a class="header-anchor" href="#_5-data-image-py" aria-label="Permalink to &quot;5. Data_Image.py&quot;">​</a></h2><ul><li>功能: 为每个分镜生成随机图像路径</li><li>主要步骤: <ol><li>从Excel文件读取图片词汇和分镜标签数据</li><li>根据词汇生成图像文件夹路径</li><li>在每个文件夹中随机选择一个图像</li><li>根据分镜标签将图像路径分组</li></ol></li></ul><h2 id="_6-data-page-py" tabindex="-1">6. Data_Page.py <a class="header-anchor" href="#_6-data-page-py" aria-label="Permalink to &quot;6. Data_Page.py&quot;">​</a></h2><ul><li>功能: 整合分镜位置和图像数据</li><li>主要步骤: <ol><li>调用Data_Frames.py和Data_Image.py的功能</li><li>将分镜位置数据和图像路径数据组合</li><li>生成包含每个分镜图像和位置信息的数据结构</li></ol></li></ul><h2 id="_7-comic-gen-final-py" tabindex="-1">7. Comic_Gen_Final.py <a class="header-anchor" href="#_7-comic-gen-final-py" aria-label="Permalink to &quot;7. Comic_Gen_Final.py&quot;">​</a></h2><ul><li>功能: 整合了之前的组件，实现了最终的漫画页面生成。</li><li>主要步骤: <ol><li>初始化ImageProcessor类</li><li>从Excel文件读取数据</li><li>生成分镜位置和图像数据</li><li>处理每个分镜: <ul><li>打开背景图像</li><li>创建灰色背景</li><li>调整和粘贴颜色图像</li><li>绘制边框</li></ul></li><li>增强图像对比度和亮度</li><li>将图像转换为灰度模式</li><li>保存处理后的图像</li></ol></li></ul><p>系统的工作流程大致如下：</p><ol><li>使用Pre_Gen_Frames_Data.py预处理分镜数据</li><li>准备Excel文件，包含必要的文本和图像数据</li><li>运行Comic_Gen_Final.py，该脚本会： <ul><li>读取Excel数据</li><li>生成分镜布局</li><li>选择并放置图像</li><li>应用图像处理效果</li><li>输出最终的漫画页面</li></ul></li></ol><p>这个系统提供了一个灵活的框架，可以根据预定义的数据和布局模板自动生成漫画页面。</p><hr><h2 id="关于分镜" tabindex="-1">关于分镜 <a class="header-anchor" href="#关于分镜" aria-label="Permalink to &quot;关于分镜&quot;">​</a></h2><p>关于漫画分镜数量的规范确实是一个比较有经验和风格性的问题，各种类型的漫画在不同场景下使用的分镜数量差异很大。一般来说，以下几方面可以帮助得出更合适的漫画分镜数以及相关布局规范：</p><ol><li>分镜数量依据类型和节奏 轻松对话场景：通常分镜较多，一页可以有 8-12 格。这些分镜较小，内容以对话为主，节奏较慢。 打斗场景：分镜较大，动感画面较多，通常一页有 4-6 格。这里主要通过较大的画面和动作来传达信息，节奏较快。 剧情高潮或关键镜头：通常使用大幅、甚至单幅大镜头来突出情绪和氛围，可能一页只有 1-3 格。</li><li>常见的分镜数量统计 日本漫画：日本的少年漫画中，常见每页的分镜在 5-8 格。少女漫画可能会更为密集，达到 6-12 格。 欧美漫画：欧美超级英雄类漫画通常每页的分镜较少，常见 4-6 格，以突出每一个动作或场景。</li><li>分镜布局常见模式 三分割（3-row）布局：常见于横向的三大镜头，适合静态或者慢节奏的情节。这种布局可能会有 3-6 格。 网格（grid）布局：每页分为多个相等大小的格子，适合较多对话和内容密集的场景，每页可能有 9-12 格。 动态布局：包括一些不规则或变化较多的镜头排列方式，适合打斗或快速节奏的情节，通常 5-8 格。</li><li>用户体验与阅读习惯 每页分镜数的视觉影响：过多的分镜会让读者感到视觉疲劳，分镜过少则会降低信息密度和节奏感。所以，漫画页面通常有适合的“黄金分镜数”。很多日本漫画的常见经验是每页 5-8 格，既不让读者感到拥挤，也能保持适当的节奏和连贯性。</li><li>实际使用的参考标准 调研数据来源：在一些经典漫画中，诸如《火影忍者》、《海贼王》以及《蜘蛛侠》等作品，你会发现每页通常有 4-9 个分镜，偶尔为情节高潮或悬念设置而使用大幅镜头。 分页规律：每本漫画的章节通常是 16-20 页，不同的分镜布局会根据情节调整，分镜总数通常在 80-150 格之间，每页的格数在 6-8 格 较为常见。</li><li>调整建议 通过这些经验值，我们可以将每页的分镜格数限制在 4-9 格，并根据场景自动调整，例如对话多的场景可以使用较多分镜，动作场景使用较少分镜。每页超过12格通常会显得过于密集，降低阅读体验。</li></ol><hr><h2 id="整合新版代码" tabindex="-1">整合新版代码 <a class="header-anchor" href="#整合新版代码" aria-label="Permalink to &quot;整合新版代码&quot;">​</a></h2><blockquote><p>实现了更紧凑的结构，更少的代码量</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>import openpyxl</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span>from collections import Counter</span></span>
<span class="line"><span>from PIL import Image, ImageDraw, ImageEnhance, ImageFont</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通用功能函数 - 读取Excel指定列数据</span></span>
<span class="line"><span>def extract_column_data(excel_path, column_index):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        workbook = openpyxl.load_workbook(excel_path)</span></span>
<span class="line"><span>        sheet = workbook.active</span></span>
<span class="line"><span>        return [row[0] for row in sheet.iter_rows(min_row=2, min_col=column_index, max_col=column_index, values_only=True)]</span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        print(f&quot;读取Excel失败: {e}&quot;)</span></span>
<span class="line"><span>        return None</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据词汇列和标签列生成对应的图像路径</span></span>
<span class="line"><span>def generate_images(config, column_index_words, column_index_labels):</span></span>
<span class="line"><span>    words_data = extract_column_data(config[&#39;excel_path&#39;], column_index_words)</span></span>
<span class="line"><span>    labels_data = extract_column_data(config[&#39;excel_path&#39;], column_index_labels)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    full_paths_with_images = []</span></span>
<span class="line"><span>    for word, label in zip(words_data, labels_data):</span></span>
<span class="line"><span>        full_path = os.path.join(config[&#39;parent_image_path&#39;], word)</span></span>
<span class="line"><span>        if os.path.exists(full_path):</span></span>
<span class="line"><span>            files = os.listdir(full_path)</span></span>
<span class="line"><span>            random_image = random.choice(files) if files else &#39;None&#39;</span></span>
<span class="line"><span>            full_paths_with_images.append(os.path.join(full_path, random_image))</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            full_paths_with_images.append(os.path.join(full_path, &#39;None&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 统计标签出现次数并按标签分组</span></span>
<span class="line"><span>    counted_data = Counter(labels_data)</span></span>
<span class="line"><span>    result_arrays = []</span></span>
<span class="line"><span>    current_index = 0</span></span>
<span class="line"><span>    for _, count in counted_data.items():</span></span>
<span class="line"><span>        result_arrays.append(full_paths_with_images[current_index:current_index + count])</span></span>
<span class="line"><span>        current_index += count</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return result_arrays</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从分镜标签中随机生成框架位置数据</span></span>
<span class="line"><span>def generate_frames(config, labels_data):</span></span>
<span class="line"><span>    random_lines = []</span></span>
<span class="line"><span>    count_dict = Counter(labels_data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for number, count in count_dict.items():</span></span>
<span class="line"><span>        file_path = os.path.join(config[&#39;storyboard_path&#39;], f&#39;storyboard_data_f{count}.txt&#39;)</span></span>
<span class="line"><span>        if os.path.exists(file_path):</span></span>
<span class="line"><span>            with open(file_path, &#39;r&#39;) as file:</span></span>
<span class="line"><span>                lines = file.readlines()</span></span>
<span class="line"><span>                random_line = eval(lines[random.randint(0, len(lines) - 1)].strip())</span></span>
<span class="line"><span>                random_lines.append(random_line)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return random_lines</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 生成漫画页数据 - 图像和对应位置矩形框</span></span>
<span class="line"><span>def generate_page_data(images_data, frames_data):</span></span>
<span class="line"><span>    return [{&quot;images&quot;: images, &quot;rectangles&quot;: frames} for images, frames in zip(images_data, frames_data)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 判断矩形顶点是否在椭圆边界以内</span></span>
<span class="line"><span>def is_point_in_ellipse(px, py, cx, cy, a, b):</span></span>
<span class="line"><span>    return ((px - cx) ** 2) / a ** 2 + ((py - cy) ** 2) / b ** 2 &lt;= 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 绘制自适应外接椭圆</span></span>
<span class="line"><span>def draw_adaptive_ellipse(draw, rect_bounds, image_size):</span></span>
<span class="line"><span>    rect_x1, rect_y1, rect_x2, rect_y2 = rect_bounds</span></span>
<span class="line"><span>    rect_width = rect_x2 - rect_x1</span></span>
<span class="line"><span>    rect_height = rect_y2 - rect_y1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    aspect_ratio = rect_width / rect_height</span></span>
<span class="line"><span>    long_axis = rect_width * 1.1</span></span>
<span class="line"><span>    short_axis = rect_height * 1.1</span></span>
<span class="line"><span>    ellipse_center = (image_size[0] // 2, image_size[1] // 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        rect_corners = [(rect_x1, rect_y1), (rect_x2, rect_y1), (rect_x1, rect_y2), (rect_x2, rect_y2)]</span></span>
<span class="line"><span>        if all(is_point_in_ellipse(px, py, ellipse_center[0], ellipse_center[1], long_axis / 2, short_axis / 2) for px, py in rect_corners):</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        long_axis += 5</span></span>
<span class="line"><span>        short_axis += 5 / aspect_ratio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw.ellipse(</span></span>
<span class="line"><span>        [(ellipse_center[0] - long_axis // 2, ellipse_center[1] - short_axis // 2),</span></span>
<span class="line"><span>         (ellipse_center[0] + long_axis // 2, ellipse_center[1] + short_axis // 2)],</span></span>
<span class="line"><span>        fill=(255, 255, 255, 255),</span></span>
<span class="line"><span>        outline=(0, 0, 0, 255),</span></span>
<span class="line"><span>        width=3</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 绘制竖排文字并适应外接椭圆</span></span>
<span class="line"><span>def vertical_text_with_adaptive_ellipse(text, image_size=(3025, 4299), font_path=r&quot;C:\\Windows\\Fonts\\simhei.ttf&quot;, font_size=80, max_chars_per_column=6, column_spacing=10, output_path=&quot;word.png&quot;):</span></span>
<span class="line"><span>    image = Image.new(&quot;RGBA&quot;, image_size, (255, 255, 255, 0))</span></span>
<span class="line"><span>    draw = ImageDraw.Draw(image)</span></span>
<span class="line"><span>    font = ImageFont.truetype(font_path, font_size)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char_width, char_height = draw.textbbox((0, 0), &quot;测&quot;, font=font)[2:4]</span></span>
<span class="line"><span>    total_chars = len(text)</span></span>
<span class="line"><span>    total_columns = (total_chars + max_chars_per_column - 1) // max_chars_per_column</span></span>
<span class="line"><span>    text_block_width = total_columns * char_width + (total_columns - 1) * column_spacing</span></span>
<span class="line"><span>    text_block_height = min(max_chars_per_column, total_chars) * char_height</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    x_start = (image_size[0] - text_block_width) // 2</span></span>
<span class="line"><span>    y_start = (image_size[1] - text_block_height) // 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    border_padding = 10</span></span>
<span class="line"><span>    rect_bounds = (x_start - border_padding, y_start - border_padding,</span></span>
<span class="line"><span>                   x_start + text_block_width + border_padding,</span></span>
<span class="line"><span>                   y_start + text_block_height + border_padding)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw_adaptive_ellipse(draw, rect_bounds, image_size)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for col in range(total_columns):</span></span>
<span class="line"><span>        start_idx = col * max_chars_per_column</span></span>
<span class="line"><span>        end_idx = min(start_idx + max_chars_per_column, total_chars)</span></span>
<span class="line"><span>        for i in range(start_idx, end_idx):</span></span>
<span class="line"><span>            x = x_start + (total_columns - 1 - col) * (char_width + column_spacing)</span></span>
<span class="line"><span>            y = y_start + (i % max_chars_per_column) * char_height</span></span>
<span class="line"><span>            draw.text((x, y), text[i], font=font, fill=(0, 0, 0, 255))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 保存每个图片，文件名包含行号</span></span>
<span class="line"><span>    image.save(output_path, &quot;PNG&quot;)</span></span>
<span class="line"><span>    print(f&quot;生成图片: {output_path}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从Excel中读取文本并生成图片</span></span>
<span class="line"><span>def generate_images_from_excel(excel_path, column_index, output_dir):</span></span>
<span class="line"><span>    texts = extract_column_data(excel_path, column_index)</span></span>
<span class="line"><span>    if texts:</span></span>
<span class="line"><span>        # 创建输出目录（如果不存在的话）</span></span>
<span class="line"><span>        os.makedirs(output_dir, exist_ok=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for idx, text in enumerate(texts):</span></span>
<span class="line"><span>            # 跳过 None 或空字符串</span></span>
<span class="line"><span>            if not text or text.strip() == &quot;&quot;:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 生成每个对话框的图片，文件名包含行号</span></span>
<span class="line"><span>            file_name = os.path.join(output_dir, f&quot;word_row_{idx + 1}.png&quot;)</span></span>
<span class="line"><span>            vertical_text_with_adaptive_ellipse(text, output_path=file_name)</span></span>
<span class="line"><span># 处理和生成漫画页</span></span>
<span class="line"><span>class ImageProcessor:</span></span>
<span class="line"><span>    def __init__(self, config):</span></span>
<span class="line"><span>        self.config = config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def process_image_data(self, image_data, output_path):</span></span>
<span class="line"><span>        for idx, data in enumerate(image_data):</span></span>
<span class="line"><span>            # 使用 RGBA 模式以支持透明度</span></span>
<span class="line"><span>            image = Image.open(self.config[&#39;comic_page_template&#39;]).convert(&quot;RGBA&quot;)</span></span>
<span class="line"><span>            draw = ImageDraw.Draw(image)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            for rectangle, image_path in zip(data[&quot;rectangles&quot;], data[&quot;images&quot;]):</span></span>
<span class="line"><span>                max_width, max_height = rectangle[2] - rectangle[0], rectangle[3] - rectangle[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                # 创建灰色背景图像 (RGBA) 以支持透明度</span></span>
<span class="line"><span>                gray_background = Image.new(&quot;RGBA&quot;, (max_width, max_height), (200, 200, 200))  # 灰色背景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if os.path.exists(image_path):</span></span>
<span class="line"><span>                    color_texture = Image.open(image_path).convert(&quot;RGBA&quot;)  # 保证图片是RGBA模式</span></span>
<span class="line"><span>                    img_width, img_height = color_texture.size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 调整大小以适应矩形框</span></span>
<span class="line"><span>                    scale_factor = min(max_width / img_width, max_height / img_height)</span></span>
<span class="line"><span>                    new_size = (int(img_width * scale_factor), int(img_height * scale_factor))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 使用 LANCZOS 来代替 ANTIALIAS</span></span>
<span class="line"><span>                    color_texture = color_texture.resize(new_size, Image.Resampling.LANCZOS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 计算贴图的左上角位置，使图像居中</span></span>
<span class="line"><span>                    paste_position = ((max_width - new_size[0]) // 2, (max_height - new_size[1]) // 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    # 将PNG图像合并到灰色背景上，透明部分保持不变</span></span>
<span class="line"><span>                    gray_background.paste(color_texture, paste_position, color_texture)  # 使用color_texture本身作为掩码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                # 将背景图（包括贴图）粘贴到漫画页上</span></span>
<span class="line"><span>                image.paste(gray_background, (rectangle[0], rectangle[1]), gray_background)  # 使用gray_background本身作为掩码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                # 绘制矩形边框</span></span>
<span class="line"><span>                draw.rectangle(rectangle, outline=&quot;black&quot;, width=10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # 保存处理后的页面</span></span>
<span class="line"><span>            output_img_path = f&quot;{output_path}_{idx + 1}.png&quot;</span></span>
<span class="line"><span>            image.save(output_img_path, &quot;PNG&quot;)</span></span>
<span class="line"><span>            self.process_image(output_img_path, output_img_path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def process_image(self, image_path, output_path):</span></span>
<span class="line"><span>        image = Image.open(image_path)</span></span>
<span class="line"><span>        image = ImageEnhance.Contrast(image).enhance(0.7)</span></span>
<span class="line"><span>        image = ImageEnhance.Brightness(image).enhance(1)</span></span>
<span class="line"><span>        image.convert(&quot;L&quot;).save(output_path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 主函数 - 整合并生成漫画页</span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    # 配置信息</span></span>
<span class="line"><span>    config = {</span></span>
<span class="line"><span>        &#39;excel_path&#39;: &quot;E:\\\\comic_gen\\\\excel\\\\1话.xlsx&quot;,  # Excel 文件路径</span></span>
<span class="line"><span>        &#39;parent_image_path&#39;: &#39;E:\\\\comic_gen\\\\words&#39;,  # 词汇图片父目录</span></span>
<span class="line"><span>        &#39;storyboard_path&#39;: &#39;E:\\\\comic_gen\\\\storyboard_data&#39;,  # 分镜数据目录</span></span>
<span class="line"><span>        &#39;comic_page_template&#39;: &quot;E:\\\\comic_gen\\\\Comicpage\\\\page.png&quot;,  # 漫画页模板</span></span>
<span class="line"><span>        &#39;output_path&#39;: &quot;E:\\\\comic_gen\\\\Page&quot;,  # 输出目录</span></span>
<span class="line"><span>        &#39;text_output_dir&#39;: &quot;E:\\\\comic_gen\\\\output&quot;  # 竖排文字输出目录</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    column_index_words = 3  # 第三列：图片词汇数据</span></span>
<span class="line"><span>    column_index_labels = 2  # 第二列：分镜标签数据</span></span>
<span class="line"><span>    column_index_texts = 4   # 第四列：竖排文字数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 读取Excel并生成数据</span></span>
<span class="line"><span>    words_data = extract_column_data(config[&#39;excel_path&#39;], column_index_words)</span></span>
<span class="line"><span>    labels_data = extract_column_data(config[&#39;excel_path&#39;], column_index_labels)</span></span>
<span class="line"><span>    images_data = generate_images(config, column_index_words, column_index_labels)</span></span>
<span class="line"><span>    frames_data = generate_frames(config, labels_data)</span></span>
<span class="line"><span>    page_data = generate_page_data(images_data, frames_data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 生成竖排文字图片</span></span>
<span class="line"><span>    generate_images_from_excel(config[&#39;excel_path&#39;], column_index_texts, config[&#39;text_output_dir&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 处理图像并生成最终页面</span></span>
<span class="line"><span>    processor = ImageProcessor(config)</span></span>
<span class="line"><span>    processor.process_image_data(page_data, config[&#39;output_path&#39;])</span></span>
<span class="line"><span>    print(&#39;漫画生成完成！&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div>`,27)])])}const g=n(i,[["render",t]]);export{u as __pageData,g as default};
