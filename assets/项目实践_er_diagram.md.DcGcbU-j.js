const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/mermaid.core.UfmbmOsX.js","assets/chunks/framework.CGCCzANv.js","assets/chunks/theme.DPMzere5.js"])))=>i.map(i=>d[i]);
import{v as u,V as g,$ as m,C as p,o as f,c as b,j as t,a as e,E as v,w as y}from"./chunks/framework.CGCCzANv.js";const E=JSON.parse('{"title":"配置表关系图（交互预览）","description":"","frontmatter":{"title":"配置表关系图（交互预览）","readingTime":"7 min read"},"headers":[],"relativePath":"项目实践/er_diagram.md","filePath":"项目实践/er_diagram.md"}'),w={name:"项目实践/er_diagram.md"},B=Object.assign(w,{setup(x){class h{constructor(n,d){this.el=n,this.lv=d,this.svg=null,this.s=1,this.x=0,this.y=0,this.pan=!1,n.style.cursor="grab",this._onWheel=s=>{s.preventDefault(),this._svg();const a=n.getBoundingClientRect(),r=s.clientX-a.left,i=s.clientY-a.top,_=Math.min(6,Math.max(.2,this.s*(s.deltaY<0?1.12:.88)));this.x=r-(r-this.x)*(_/this.s),this.y=i-(i-this.y)*(_/this.s),this.s=_,this._apply()},this._onMDown=s=>{s.button===1&&(s.preventDefault(),this.pan=!0,this._sx=s.clientX-this.x,this._sy=s.clientY-this.y,n.classList.add("dg-panning"))},this._onMMove=s=>{this.pan&&(this.x=s.clientX-this._sx,this.y=s.clientY-this._sy,this._apply())},this._onMUp=()=>{this.pan&&(this.pan=!1,n.classList.remove("dg-panning"))},n.addEventListener("wheel",this._onWheel,{passive:!1}),n.addEventListener("mousedown",this._onMDown),n.addEventListener("auxclick",s=>s.preventDefault()),n.addEventListener("dblclick",()=>this.reset()),window.addEventListener("mousemove",this._onMMove),window.addEventListener("mouseup",this._onMUp)}_svg(){this.svg||(this.svg=this.el.querySelector("svg"))}_apply(){const n=this._svg()||this.svg;n&&(n.style.cssText="transform:translate("+this.x+"px,"+this.y+"px) scale("+this.s+");transform-origin:0 0"),this.lv.textContent=Math.round(this.s*100)+"%"}zoomIn(){this.s=Math.min(6,this.s*1.2),this._apply()}zoomOut(){this.s=Math.max(.2,this.s/1.2),this._apply()}reset(){this.s=1,this.x=0,this.y=0;const n=this._svg()||this.svg;n&&(n.style.cssText=""),this.lv.textContent="100%"}destroy(){this.el.removeEventListener("wheel",this._onWheel),this.el.removeEventListener("mousedown",this._onMDown),window.removeEventListener("mousemove",this._onMMove),window.removeEventListener("mouseup",this._onMUp)}}let o=[],c=null;return u(async()=>{const{default:l}=await g(async()=>{const{default:a}=await import("./chunks/mermaid.core.UfmbmOsX.js").then(r=>r.bB);return{default:a}},__vite__mapDeps([0,1,2]));l.initialize({theme:"base",securityLevel:"loose",startOnLoad:!1,flowchart:{useMaxWidth:!1,htmlLabels:!0}});const n=[document.getElementById("dg-src-0").textContent,document.getElementById("dg-src-1").textContent],[d,s]=await Promise.all([l.render("dg-a",n[0]).catch(()=>null),l.render("dg-b",n[1]).catch(()=>null)]);d&&(document.getElementById("dg-inner-0").innerHTML=d.svg),s&&(document.getElementById("dg-inner-1").innerHTML=s.svg),o=[new h(document.getElementById("dg-canvas-0"),document.getElementById("dg-lv-0")),new h(document.getElementById("dg-canvas-1"),document.getElementById("dg-lv-1"))],document.getElementById("dg-app").addEventListener("click",a=>{const r=a.target.closest("[data-dg]");if(!r)return;const i=o[+r.dataset.dg];r.dataset.act==="in"?i.zoomIn():r.dataset.act==="out"?i.zoomOut():i.reset()}),c=a=>{const r=document.activeElement;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"))return;const i=document.querySelector(".dg-canvas:hover");if(!i)return;const _=i.id==="dg-canvas-0"?0:1;a.key==="r"||a.key==="R"?!a.ctrlKey&&!a.metaKey&&(a.preventDefault(),o[_].reset()):a.key==="+"||a.key==="="?(a.preventDefault(),o[_].zoomIn()):a.key==="-"?(a.preventDefault(),o[_].zoomOut()):a.key==="0"&&(a.ctrlKey||a.metaKey)&&(a.preventDefault(),o[_].reset())},window.addEventListener("keydown",c)}),m(()=>{c&&window.removeEventListener("keydown",c),o.forEach(l=>l.destroy()),o=[]}),(l,n)=>{const d=p("ClientOnly");return f(),b("div",null,[n[1]||(n[1]=t("h1",{id:"配置表关系图-交互预览",tabindex:"-1"},[e("配置表关系图（交互预览） "),t("a",{class:"header-anchor",href:"#配置表关系图-交互预览","aria-label":'Permalink to "配置表关系图（交互预览）"'},"​")],-1)),n[2]||(n[2]=t("blockquote",null,[t("p",null,"35 张 Excel 表 / 11 个系统模块"),t("p",null,[t("strong",null,"操作提示"),e("：鼠标滚轮缩放 · 中键拖拽平移 · R 键重置视图 · 双击重置")])],-1)),v(d,null,{default:y(()=>[...n[0]||(n[0]=[t("div",{id:"dg-app"},[t("div",{class:"dg-card"},[t("div",{class:"dg-card-hd"},[t("span",{class:"dg-card-title"},"全局引用关系总图"),t("span",{class:"dg-card-badge"},"10 个子系统"),t("span",{class:"dg-spacer"}),t("button",{"data-dg":"0","data-act":"out",class:"dg-btn"},"-"),t("span",{class:"dg-level",id:"dg-lv-0"},"100%"),t("button",{"data-dg":"0","data-act":"in",class:"dg-btn"},"+"),t("button",{"data-dg":"0","data-act":"reset",class:"dg-btn"},"↻")]),t("div",{class:"dg-canvas",id:"dg-canvas-0"},[t("div",{id:"dg-inner-0"})]),t("div",{class:"dg-legend"},[t("span",{class:"dg-leg-line"}),e(" 实线 = 主键/外键引用 "),t("span",{class:"dg-leg-line dashed"}),e(" 虚线 = 效果名字符串引用 "),t("span",{class:"dg-leg-note"},"独立表：t_character_exp / t_party_formation / t_element_matrix / t_enhance_cost / t_affinity / t_achievement / t_chronicles / t_tutorial / t_localization")])]),t("div",{class:"dg-card"},[t("div",{class:"dg-card-hd"},[t("span",{class:"dg-card-title"},"物品引用汇聚点"),t("span",{class:"dg-card-badge"},"5 个系统引用"),t("span",{class:"dg-spacer"}),t("button",{"data-dg":"1","data-act":"out",class:"dg-btn"},"-"),t("span",{class:"dg-level",id:"dg-lv-1"},"100%"),t("button",{"data-dg":"1","data-act":"in",class:"dg-btn"},"+"),t("button",{"data-dg":"1","data-act":"reset",class:"dg-btn"},"↻")]),t("div",{class:"dg-canvas",id:"dg-canvas-1"},[t("div",{id:"dg-inner-1"})]),t("div",{class:"dg-legend"},[t("span",{class:"dg-leg-note"},"修改任一物品 ID 时，须检查这 5 张引用表是否同步更新。validate.py 会自动校验。")])])],-1),t("pre",{id:"dg-src-0",hidden:""},[e(`%%{init: {'flowchart': {'nodeSpacing': 35, 'rankSpacing': 60, 'padding': 20}, 'theme': 'base', 'themeVariables': {'primaryColor': '#5B84A3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#3D6380', 'secondaryColor': '#7C8FA0', 'secondaryTextColor': '#ffffff', 'secondaryBorderColor': '#5B778A', 'lineColor': '#A0AAB4', 'clusterBkg': '#F0F2F4', 'clusterBorder': '#CDD3DA', 'titleColor': '#475569', 'edgeLabelBackground': '#F5F6F8', 'tertiaryColor': '#8B9DAF', 'tertiaryTextColor': '#ffffff', 'tertiaryBorderColor': '#6B7D8F'}}}%%
flowchart LR
  subgraph Characters["角色"]
    t_character_base["t_character_base`),t("br"),e(`角色定义"]
    t_character_level["t_character_level`),t("br"),e(`每级属性"]
    t_character_exp["t_character_exp`),t("br"),e(`经验曲线"]
    t_party_formation["t_party_formation`),t("br"),e(`阵型"]
  end
  subgraph Skills["技能"]
    t_skill_data["t_skill_data`),t("br"),e(`技能主表"]
    t_status_effects["t_status_effects`),t("br"),e(`状态效果"]
    t_element_matrix["t_element_matrix`),t("br"),e(`元素克制"]
    t_limit_break["t_limit_break`),t("br"),e(`限制技"]
    t_wa_gene_tree["t_wa_gene_tree`),t("br"),e(`娲术基因树"]
  end
  subgraph Monsters["怪物"]
    t_monster_base["t_monster_base`),t("br"),e(`敌人定义"]
    t_monster_skill["t_monster_skill`),t("br"),e(`敌人技能"]
    t_monster_group["t_monster_group`),t("br"),e(`敌人编组"]
  end
  subgraph Battle["战斗"]
    t_battle_scene["t_battle_scene`),t("br"),e(`战斗场景"]
  end
  subgraph Items["物品装备"]
    t_consumable["t_consumable`),t("br"),e(`消耗品"]
    t_material["t_material`),t("br"),e(`材料"]
    t_equipment_data["t_equipment_data`),t("br"),e(`装备"]
    t_recipe["t_recipe`),t("br"),e(`合成配方"]
    t_enhance_cost["t_enhance_cost`),t("br"),e(`强化消耗"]
  end
  subgraph Shops["商店"]
    t_shop_config["t_shop_config`),t("br"),e(`商店定义"]
    t_shop_inventory["t_shop_inventory`),t("br"),e(`商店库存"]
  end
  subgraph Quests["任务"]
    t_quest_main["t_quest_main`),t("br"),e(`任务定义"]
    t_quest_objective["t_quest_objective`),t("br"),e(`任务目标"]
    t_quest_reward["t_quest_reward`),t("br"),e(`任务奖励"]
  end
  subgraph NPCs["NPC"]
    t_npc_config["t_npc_config`),t("br"),e(`NPC定义"]
    t_dialogue["t_dialogue`),t("br"),e(`对话"]
    t_cutscene["t_cutscene`),t("br"),e(`过场动画"]
  end
  subgraph World["世界地图"]
    t_map_node["t_map_node`),t("br"),e(`地图节点"]
    t_treasure_chest["t_treasure_chest`),t("br"),e(`宝箱"]
    t_teleport["t_teleport`),t("br"),e(`传送点"]
    t_affinity["t_affinity`),t("br"),e(`好感度"]
  end
  subgraph Meta["Meta"]
    t_achievement["t_achievement`),t("br"),e(`成就"]
    t_chronicles["t_chronicles`),t("br"),e(`编年史"]
    t_tutorial["t_tutorial`),t("br"),e(`教程"]
    t_localization["t_localization`),t("br"),e(`本地化"]
  end
  t_character_base --> t_character_level
  t_character_base --> t_skill_data
  t_character_base --> t_limit_break
  t_character_base --> t_wa_gene_tree
  t_character_base --> t_equipment_data
  t_skill_data -.-> t_status_effects
  t_monster_base --> t_monster_skill
  t_monster_base --> t_monster_group
  t_battle_scene --> t_monster_base
  t_battle_scene --> t_monster_group
  t_monster_group --> t_consumable
  t_monster_group --> t_material
  t_shop_config --> t_shop_inventory
  t_shop_inventory --> t_consumable
  t_shop_inventory --> t_equipment_data
  t_quest_main --> t_quest_objective
  t_quest_main --> t_quest_reward
  t_quest_reward --> t_consumable
  t_quest_reward --> t_skill_data
  t_quest_reward --> t_equipment_data
  t_npc_config --> t_dialogue
  t_npc_config --> t_cutscene
  t_npc_config --> t_quest_main
  t_npc_config --> t_shop_config
  t_map_node --> t_treasure_chest
  t_map_node --> t_teleport
  t_treasure_chest --> t_consumable
  t_treasure_chest --> t_material
  t_treasure_chest --> t_equipment_data
  t_recipe --> t_material
  t_recipe --> t_consumable
  t_recipe --> t_equipment_data`)],-1),t("pre",{id:"dg-src-1",hidden:""},[e(`%%{init: {'flowchart': {'nodeSpacing': 40, 'rankSpacing': 50}, 'theme': 'base', 'themeVariables': {'primaryColor': '#5B84A3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#3D6380', 'lineColor': '#A0AAB4', 'background': '#FAFBFC', 'clusterBkg': '#F0F2F4', 'clusterBorder': '#CDD3DA', 'titleColor': '#475569', 'edgeLabelBackground': '#F5F6F8'}}}%%
flowchart TD
  ITEMS["t_consumable`),t("br"),e("t_material"),t("br"),e(`t_equipment_data"]:::hub
  A["t_monster_group.Drops`),t("br"),e(`编组掉落"]:::leaf --> ITEMS
  B["t_shop_inventory`),t("br"),e(`商店出售"]:::leaf --> ITEMS
  C["t_quest_reward`),t("br"),e(`任务奖励"]:::leaf --> ITEMS
  D["t_treasure_chest`),t("br"),e(`宝箱内容"]:::leaf --> ITEMS
  E["t_recipe`),t("br"),e(`合成产出/消耗"]:::leaf --> ITEMS
  classDef hub fill:#3D6380,color:#fff,stroke:#2C5068,stroke-width:3px
  classDef leaf fill:#5B84A3,color:#fff,stroke:#3D6380,stroke-width:2px`)],-1)])]),_:1})])}}});export{E as __pageData,B as default};
