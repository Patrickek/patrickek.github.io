"use strict";(self.webpackChunkhatrickek_site=self.webpackChunkhatrickek_site||[]).push([[907],{2008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(4848),s=n(8453);const i={slug:"oxylus-first-game",title:"Creating A Game With Oxylus",authors:["Hatrickek"],tags:["blog"]},r=void 0,o={permalink:"/blog/oxylus-first-game",source:"@site/blog/oxylus-first-game/2023-03-19-oxylus-first-game.md",title:"Creating A Game With Oxylus",description:"This blog is pretty outdated. While ECS System's still applies the API have evolved quite a lot and there is now Lua scripting as well. I'll just keep this blog as a relic :)",date:"2023-03-19T00:00:00.000Z",tags:[{inline:!0,label:"blog",permalink:"/blog/tags/blog"}],readingTime:5.66,hasTruncateMarker:!1,authors:[{name:"Hatrickek",url:"https://github.com/Hatrickek",imageURL:"https://avatars.githubusercontent.com/u/89982837?v=4",key:"Hatrickek"}],frontMatter:{slug:"oxylus-first-game",title:"Creating A Game With Oxylus",authors:["Hatrickek"],tags:["blog"]},unlisted:!1},l={authorsImageUrls:[void 0]},c=[{value:"This blog is pretty outdated. While ECS System&#39;s still applies the API have evolved quite a lot and there is now Lua scripting as well. I&#39;ll just keep this blog as a relic :)",id:"this-blog-is-pretty-outdated-while-ecs-systems-still-applies-the-api-have-evolved-quite-a-lot-and-there-is-now-lua-scripting-as-well-ill-just-keep-this-blog-as-a-relic-",level:3},{value:"Project",id:"project",level:2},{value:"Scene",id:"scene",level:2},{value:"Systems",id:"systems",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"UI",id:"ui",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"this-blog-is-pretty-outdated-while-ecs-systems-still-applies-the-api-have-evolved-quite-a-lot-and-there-is-now-lua-scripting-as-well-ill-just-keep-this-blog-as-a-relic-",children:"This blog is pretty outdated. While ECS System's still applies the API have evolved quite a lot and there is now Lua scripting as well. I'll just keep this blog as a relic :)"}),"\n",(0,a.jsx)(t.p,{children:"For the purpose of testing Oxylus' capabilities and identifying any missing features, I have decided to make a game using the engine. This project will serve as a stress test to see how well the engine can handle complex gameplay scenarios, while also providing an opportunity to showcase its current features. Furthermore, while working on the game, I'll be able to spot any features that are missing or need improvement. This way, I can add them to the engine and make it even better!"}),"\n",(0,a.jsxs)(t.p,{children:["The game I chose to remake in 3D is ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cyclone_(video_game)",children:"1985 Cyclone"}),". It looked simple and is enough to showcase almost all features of the engine."]}),"\n",(0,a.jsx)(t.p,{children:"In this blog post I will show the steps I took to create the game, similar to a tutorial you might find for popular engines like Unity, Unreal or etc."}),"\n",(0,a.jsx)(t.p,{children:"So let us begin..."}),"\n",(0,a.jsx)(t.h2,{id:"project",children:"Project"}),"\n",(0,a.jsx)(t.p,{children:"The project selection panel is the first thing you will see when launching the engine. The top rows displays recent projects that have been opened, and below that are buttons to load or create projects with a file dialog."}),"\n",(0,a.jsx)(t.p,{children:"In Oxylus, a project is simply a YAML file that specifies the project name, starting scene path, and asset directory:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yml",children:'Project:\r\n  Name: ProjectCyclone\r\n  StartScene: "Scenes/Main.oxscene"\r\n  AssetDirectory: "Assets"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"scene",children:"Scene"}),"\n",(0,a.jsxs)(t.p,{children:["First of all, we need assets to load for our scene. I found a nice ",(0,a.jsx)(t.a,{href:"https://sketchfab.com/3d-models/low-poly-helicopter-5bbed2de9baa4a13a7faa72653b78b64",children:"helicopter model"}),"\r\nfrom Sketchfab. To import assets into Oxylus, simply download the asset and drag and drop it into the editor. Oxylus will automatically load all meshes and materials and create parented entities based on the glTF node hierarchy."]}),"\n",(0,a.jsx)(t.p,{children:"To create ground in the game, I used a plane and applied a green material to it. I created the material first, then simply draged and dropped it onto the plane in the editor."}),"\n",(0,a.jsx)(t.h2,{id:"systems",children:"Systems"}),"\n",(0,a.jsxs)(t.p,{children:["One of the most useful features of editing scenes in Oxylus is the ability to see the results immediately during runtime. To achieve this, I implemented the ",(0,a.jsx)(t.code,{children:"HotReloadableScene"})," system using the Oxylus Systems and Event System. With ",(0,a.jsx)(t.code,{children:"HotReloadableScene"}),", you can make changes to a scene and see the changes take effect in real-time, making the editing process much faster and more efficient."]}),"\n",(0,a.jsxs)(t.p,{children:["Systems in Oxylus are inherited from the ",(0,a.jsx)(t.code,{children:"System"})," interface."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"class System {\r\npublic:\r\n  std::string Name;\r\n  System() = default;\r\n  System(std::string name) : Name(std::move(name)) {}\r\n  virtual ~System() = default;\r\n  virtual void OnInit() {};\r\n  virtual void OnUpdate() {}\r\n  virtual void OnUpdate(Scene* scene) {}\r\n  virtual void OnShutdown() {};\r\n  void SetDispatcher(EventDispatcher* dispatcher) { m_Dispatcher = dispatcher; }\r\nprotected:\r\n  EventDispatcher* m_Dispatcher = nullptr;\r\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Defining the ",(0,a.jsx)(t.code,{children:"HotReloadableScene"})," system:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"void HotReloadableScenes::OnUpdate() {\r\n  using namespace std::filesystem;\r\n  if (last_write_time(m_ScenePath).time_since_epoch().count()\r\n      != m_LastWriteTime.time_since_epoch().count()) {\r\n    //File changed event\r\n    m_Dispatcher->trigger<ReloadSceneEvent>();\r\n    m_LastWriteTime = last_write_time(m_ScenePath);\r\n  }\r\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"m_Dispatcher->trigger<ReloadSceneEvent>();"})," is the way to simply trigger the ",(0,a.jsx)(t.code,{children:"ReloadSceneEvent"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"OnAttach"})," callback on the ",(0,a.jsx)(t.code,{children:"GameLayer"})," listens for the system event:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'void GameLayer::OnAttach(EventDispatcher& dispatcher) {\r\n  dispatcher.sink<ReloadSceneEvent>().connect<&GameLayer::OnSceneReload>(*this);\r\n}\r\n\r\nbool GameLayer::OnSceneReload(ReloadSceneEvent&) {\r\n  LoadScene();\r\n  OX_CORE_INFO("Scene reloaded.");\r\n  return true;\r\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Next, we add the system to the engine during the application creation process:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'const auto app = new ProjectCyclone(spec);\r\napp->PushLayer(new ::ProjectCyclone::GameLayer())\r\n    .AddSystem<HotReloadableScenes>("Assets/Scenes/Main.oxscene");\n'})}),"\n",(0,a.jsx)(t.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,a.jsx)(t.p,{children:"Now we can move onto the fun part of game development and prove wrong the infamous phrase about engine developers \ud83d\ude1b:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Give someone an engine and they'll make a game. Teach someone to make an engine and they'll never make anything."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"I started by creating a simple helicopter system to move the helicopter and make the propellers turn around itself."}),"\n",(0,a.jsxs)(t.p,{children:["We could have used the ",(0,a.jsx)(t.code,{children:"ScriptableEntity"}),' approach, but instead, I opted for the "raw" ECS method as I did not require any callbacks from the ',(0,a.jsx)(t.code,{children:"ScriptableEntity"})," API."]}),"\n",(0,a.jsx)(t.p,{children:"The component that will be added on helicopter entity:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"struct HeliComponent {\r\n  float Speed = 5.0f;\r\n  float Fuel = 1.0f;  //1.0f = Full, 0.0f = Empty\r\n  float Altitude = 0.0f;\r\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using the same method as we used to declare the engine system in the previous section, we can now declare a system for the Helicopter entities."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"void HeliSystem::OnUpdate(Scene* scene) {\r\n  auto& registery = scene->m_Registry;\r\n    const auto view = registery.view<TransformComponent, HeliComponent>();\r\n    for (const auto entity : view) {\r\n      auto&& [transform, heli] = view.get<TransformComponent, HeliComponent>(entity);\r\n\r\n      //Move horizontal\r\n      if (Input::GetKeyDown(Key::W)) {\r\n        transform.Translation.z += heli.Speed * Timestep::GetDeltaTime();\r\n      }\r\n      //...\r\n      //Other keys\r\n      //...\r\n\r\n      //Move vertical\r\n      if (Input::GetKeyDown(Key::Q) && heli.Altitude >= 0.2f) {\r\n        transform.Translation.y -= heli.Speed * Timestep::GetDeltaTime();\r\n      }\r\n      else if (Input::GetKeyDown(Key::E) && heli.Altitude < 8.0f) {\r\n        transform.Translation.y += heli.Speed * Timestep::GetDeltaTime();\r\n      }\r\n\r\n      heli.Fuel -= 0.1f * ImGui::GetIO().DeltaTime;\r\n      heli.Altitude = transform.Translation.y;\r\n  }\r\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For rotating the propeller just getting the transform component and adding a constant value to ",(0,a.jsx)(t.code,{children:"y"})," rotation should work for now."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"auto ent = Oxylus::Entity { entity, m_Scene.get() };\r\nent.GetChild(1).GetComponent<Oxylus::TransformComponent>().Rotation.y += 5.0f;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Other gameplay elements that could be added include picking up crates from the ground. Similar to how we created the helicopter system, we can now create a system for the crates."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"const auto heliView = scene->m_Registry.view<TransformComponent, HeliComponent>();\r\nconst auto crateView = scene->m_Registry.view<TransformComponent, CrateComponent>();\r\nfor (const auto entity : crateView) {\r\n  auto&& [transform, crate] = crateView.get<TransformComponent, CrateComponent>(entity);\r\n  const auto ent = Entity{entity, scene};\r\n  constexpr float axisThreshold = 0.5f;\r\n  //a simple intersection check\r\n  for (const auto heliEntity : heliView) {\r\n    auto&& [heliTransform, heli] = heliView.get<TransformComponent, HeliComponent>(heliEntity);\r\n    if (std::abs(transform.Translation.x - heliTransform.Translation.x) < axisThreshold\r\n        && std::abs(transform.Translation.y + 0.2f - heliTransform.Translation.y) < axisThreshold\r\n        && std::abs(transform.Translation.z - heliTransform.Translation.z) < axisThreshold) {\r\n      heli.CratesTaken += 1;\r\n      scene->DestroyEntity(ent);\r\n      break;\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1022588581237248060/1088469165813268510/crates.gif",alt:"Crates"})}),"\n",(0,a.jsxs)(t.p,{children:["As you may have noticed, the camera is currently static. Since the player will be moving around frequently, we want to ensure that the helicopter remains in focus. Simply snapping the camera to a predefined position whenever the player moves would not look good. Therefore, we can utilize the ",(0,a.jsx)(t.code,{children:"OxMath"})," API to create a camera system with smooth damping that produces more visually pleasing result."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"m_LastCameraPosition = Math::SmoothDamp(m_LastCameraPosition,\r\n                                        heliTransform.Translation,\r\n                                        m_TranslationVelocity,\r\n                                        TranslationDampening,\r\n                                        10000.0f,\r\n                                        Timestep::GetDeltaTime());\r\ncameraTransform.Translation.x = m_LastCameraPosition.x;\r\ncameraTransform.Translation.z = m_LastCameraPosition.z + 12.0f;\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1022588581237248060/1090994911869943898/smoothcam.gif",alt:"SmootCam"})}),"\n",(0,a.jsx)(t.h2,{id:"ui",children:"UI"}),"\n",(0,a.jsxs)(t.p,{children:["To create the game UI, we can use the ",(0,a.jsx)(t.code,{children:"OxUI"})," API which is built on top of ",(0,a.jsx)(t.code,{children:"Dear ImGui"})," for drawing and layouts. In Cyclone, we need a HUD that displays instrumentation such as speed, altitude, fuel remaining and time remaining. We'll also show the number of supply crates, the player's current view direction, wind force, and a warning about the cyclone's proximity and any approaching planes. For simplicity, we'll start with showing altitude, remaining fuel, and time."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'OxUI::BeginUI();\r\nOxUI::ProgressBar("Time", Time);\r\nOxUI::ProgressBar("Fuel", Heli.Fuel);\r\nOxUI::Property("Altitude", "%.1f", Heli.Altitude);\r\nOxUI::EndUI();\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1022588581237248060/1087718914886221904/image.png",alt:"UI"})}),"\n",(0,a.jsx)(t.p,{children:"To keep track of the collected crates, we can simply use glyphs as icons in a row:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"ImGui::Text(StringUtils::FromChar8T(ICON_MDI_CUBE));\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://cdn.discordapp.com/attachments/1022588581237248060/1090992608567894056/Annotation_2023-03-30_163445.png",alt:"CratesUI"})}),"\n",(0,a.jsx)(t.h1,{id:"to-be-continued",children:"TO BE CONTINUED..."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);