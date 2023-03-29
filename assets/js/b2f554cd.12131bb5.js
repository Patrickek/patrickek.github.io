"use strict";(self.webpackChunkhatrickek_site=self.webpackChunkhatrickek_site||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"oxylus-mac-port","metadata":{"permalink":"/blog/oxylus-mac-port","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oxylus-mac-part/2023-03-29-oxylus-mac-port.md","source":"@site/blog/oxylus-mac-part/2023-03-29-oxylus-mac-port.md","title":"Porting Oxylus To MacOS","description":"In the middle of the night a Russian friend of mine a.k.a. Yugin thought of a great idea. His idea was to build Oxylus on","date":"2023-03-29T00:00:00.000Z","formattedDate":"March 29, 2023","tags":[{"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":3.565,"hasTruncateMarker":false,"authors":[{"name":"Hatrickek","url":"https://github.com/Hatrickek","imageURL":"https://avatars.githubusercontent.com/u/89982837?v=4","key":"Hatrickek"}],"frontMatter":{"slug":"oxylus-mac-port","title":"Porting Oxylus To MacOS","authors":["Hatrickek"],"tags":["blog"]},"nextItem":{"title":"Creating A Game With Oxylus","permalink":"/blog/oxylus-first-game"}},"content":"In the middle of the night a Russian friend of mine a.k.a. Yugin thought of a great idea. His idea was to build Oxylus on \\r\\nhis macbook to see how many errors and problems he will face or if it was just going to build with no problems.     \\r\\nOh boy, were we clueless as hell.      \\r\\n\\r\\n> Oh and if you think modern C++ is cross platform or just like to use the \\"modern\\" std features it has, this blog might change your thoughts on those topics \ud83d\ude05. [Also that](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b).\\r\\n\\r\\n## Dependencies\\r\\nSo he just cloned the repo and hit the build button first problem he encountered was of course the dependencies.     \\r\\nNow everyone hates managing dependencies in C++. You can\'t find me a single person that likes to write CMake scripts to manage dependencies I bet. So people created alternatives like [Premake](https://premake.github.io/) that uses Lua and simple syntax to make stuff easier which I have used until I have thought about porting Oxylus to Mac. The reason I stopped using it was because how it was limiting the user to specific tools i.e if you are on windows you had to use Visual Studio to build the project or XCode on Mac. The thing is these tools suck a lot.     \\r\\nSo I rewrote my old CMake scripts and added the small dependencies I have as submodules and automated the build. Now with this way these modules were easily buildable as cross platform (at least for mac and windows).        \\r\\nI had couple more dependencies to make as submodule though which were PhysX, KTX and Vulkan. PhysX is a very painful library to manage and I didn\'t really like working with it so I just decided to ditch it entirely and switch to [Jolt](https://github.com/jrouwe/JoltPhysics) in the future. [KTX](https://github.com/KhronosGroup/KTX-Software) had the same issue, it was huge; the repo had 6 different projects inside of it so I had to think of a way to not add it as a submodule but still make it automated with CMake. For this yugin came up with a nice solution which was just downloading the repo as a shallow zip copy and extracting it into the vendor directory. Now this worked perfectly and it made me left with the last dependency to make crossplatform: Vulkan. It was the easiest to build since CMake already had functions just for Vulkan i.e. [FindVulkan](https://cmake.org/cmake/help/latest/module/FindVulkan.html).  \\r\\nNow the project was ready to build on all platforms.    \\r\\nSurely this was the only problem right?      \\r\\n## Modern C++\\r\\nWell, in my dreams... First error he had was coming from not so modern std function `std::ranges`. Now seeing this made me question how that was an issue. After a 2 minute google search I have found that it wasn\'t even [supported on mac clang](https://developer.apple.com/forums/thread/719896)! Well thankfully I didn\'t use it that much so I rewrote the stuff I had wrote with it i.e. `ranges::view`\\r\\n`ranges::find_if` etc.       \\r\\nThe next problem was similar. Now it was from `std::views`! Again [the same issue](https://stackoverflow.com/questions/73628848/is-the-stdviews-namespace-not-available-in-xcodes-c?rq=1). I had rewrite the code I have written with it. Surely this was all, right? Surely std is not that anti cross platform? Well you will be wrong.   \\r\\nThe infamous \'std::format\' was my next enemy. With another short google search I found out that it was actually a big problem for every other platform and people had already made a miles better alternative called [fmt](https://github.com/fmtlib/fmt) so I had to bring another dependency to my project for a feature that already exists in the std but is still not cross platform after 2 years it has been released. How NICE!\\r\\nThis was all the problems I had with standard library thankfully I didn\'t go crazy with modern C++ otherwise I\'m sure this list would have had gone a lot longer.\\r\\n\\r\\nMy next and last stop was Vulkan. Since Vulkan is fairly cross platform and has verbose errors it was quite easy to run it on Mac with MoltenVK layer. Had to enable couple of layers and extension then bam it ran... Right? Nope. Molten was giving me a timeout error on some command buffer submission. Apparently I forgot to remove some semaphores on \\r\\nmy composite pipeline removed them aaand finally it was running. It only took us a couple of sleepless nights and tought us a great lesson...\\r\\n\\r\\n![Result](https://cdn.discordapp.com/attachments/1022588581237248060/1090745806765699242/Annotation_2023-03-29_235941.png)"},{"id":"oxylus-first-game","metadata":{"permalink":"/blog/oxylus-first-game","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oxylus-first-game/2023-03-19-oxylus-first-game.md","source":"@site/blog/oxylus-first-game/2023-03-19-oxylus-first-game.md","title":"Creating A Game With Oxylus","description":"I have decided to make a game with Oxylus to stress the engine, showcase the current features and find out what features I\'m missing and implement them as well.","date":"2023-03-19T00:00:00.000Z","formattedDate":"March 19, 2023","tags":[{"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":4.54,"hasTruncateMarker":false,"authors":[{"name":"Hatrickek","url":"https://github.com/Hatrickek","imageURL":"https://avatars.githubusercontent.com/u/89982837?v=4","key":"Hatrickek"}],"frontMatter":{"slug":"oxylus-first-game","title":"Creating A Game With Oxylus","authors":["Hatrickek"],"tags":["blog"]},"prevItem":{"title":"Porting Oxylus To MacOS","permalink":"/blog/oxylus-mac-port"},"nextItem":{"title":"Oxylus Engine - Introduction","permalink":"/blog/oxylus-engine-intro"}},"content":"I have decided to make a game with Oxylus to stress the engine, showcase the current features and find out what features I\'m missing and implement them as well.\\r\\n\\r\\nThe game is going to be a [1985 Cyclone](https://en.wikipedia.org/wiki/Cyclone_(video_game)) remake in 3D. It looked simple and is enough to showcase almost all features\\r\\nof the engine.\\r\\nIn this blog post I will show the steps I have taken while making the game so it\'s going to be something like a tutorial you would read for known engines like Unity, Unreal etc.\\r\\n\\r\\nSo let us begin...\\r\\n\\r\\n## Project\\r\\nNow first thing you will see when you launch the engine is going to be a project selection panel. First row is showing us the recent projects \\r\\nI have opened and below that buttons to load or create projects with a file dialog.\\r\\n![Project Selector](projects.png)\\r\\n\\r\\nProjects in Oxylus is just a yaml file specifying the name, start scene path, and asset directory:\\r\\n\\r\\n```yml \\r\\nProject:\\r\\n  Name: ProjectCyclone\\r\\n  StartScene: \\"Scenes/Main.oxscene\\"\\r\\n  AssetDirectory: \\"Assets\\"\\r\\n```\\r\\n\\r\\n## Scene \\r\\nNow we need assets to load for our scene. I have found a nice [helicopter model](https://sketchfab.com/3d-models/low-poly-helicopter-5bbed2de9baa4a13a7faa72653b78b64) \\r\\nfrom sketchfab. You can just download, drag and drop it to the editor. Oxylus will load every mesh and materials then create parented entities according to gltf node.\\r\\n![Scene](scene.png)\\r\\n\\r\\nAnd for now I will use a plane to have a ground. For the ground I will create a material and just make it have a green color. Then drag and drop it to the plane.\\r\\n![Material](Material.gif)\\r\\n\\r\\n## Systems\\r\\nWhen we edit scenes seeing the result directly on runtime is very useful. So for this reason I have created a `HotReloadableScene` system using Oxylus Systems and Oxylus Event System.\\r\\n\\r\\nSystems in Oxylus are inherited from the `System` interface.\\r\\n```cpp\\r\\nclass System {\\r\\npublic:\\r\\n  std::string Name;\\r\\n  System() = default;\\r\\n  System(std::string name) : Name(std::move(name)) {}\\r\\n  virtual ~System() = default;\\r\\n  virtual void OnInit() {};\\r\\n  virtual void OnUpdate() {}\\r\\n  virtual void OnUpdate(Scene* scene) {}\\r\\n  virtual void OnShutdown() {};\\r\\n  void SetDispatcher(EventDispatcher* dispatcher) { m_Dispatcher = dispatcher; }\\r\\nprotected:\\r\\n  EventDispatcher* m_Dispatcher = nullptr;\\r\\n};\\r\\n```\\r\\n\\r\\nDefining the `HotReloadableScene` system:\\r\\n```cpp\\r\\nvoid HotReloadableScenes::OnUpdate() {\\r\\n  using namespace std::filesystem;\\r\\n  if (last_write_time(m_ScenePath).time_since_epoch().count()\\r\\n      != m_LastWriteTime.time_since_epoch().count()) {\\r\\n    //File changed event\\r\\n    m_Dispatcher->trigger<ReloadSceneEvent>();\\r\\n    m_LastWriteTime = last_write_time(m_ScenePath);\\r\\n  }\\r\\n}\\r\\n```\\r\\n`m_Dispatcher->trigger<ReloadSceneEvent>();` is the way to simply trigger the `ReloadSceneEvent`. \\r\\n\\r\\nSystem event is listened on the `GameLayer` with `OnAttach` callback:\\r\\n```cpp\\r\\nvoid GameLayer::OnAttach(EventDispatcher& dispatcher) {\\r\\n  dispatcher.sink<ReloadSceneEvent>().connect<&GameLayer::OnSceneReload>(*this);\\r\\n}\\r\\n\\r\\nbool GameLayer::OnSceneReload(ReloadSceneEvent&) {\\r\\n  LoadScene();\\r\\n  OX_CORE_INFO(\\"Scene reloaded.\\");\\r\\n  return true;\\r\\n}\\r\\n```\\r\\n\\r\\nThen we add the system to the engine while creating the application:\\r\\n```cpp\\r\\nconst auto app = new ProjectCyclone(spec);\\r\\napp->PushLayer(new ::ProjectCyclone::GameLayer())\\r\\n    .AddSystem<HotReloadableScenes>(\\"Assets/Scenes/Main.oxscene\\");\\r\\n```\\r\\n\\r\\n![HotReloadableScenes](HotReloadableScene.gif)\\r\\n\\r\\n## Gameplay\\r\\n\\r\\nNow we can start working on the gameplay part and prove otherwise the famous phrase about engine devs \ud83d\ude1b:    \\r\\n> Give someone an engine and they\'ll make a game. Teach someone to make an engine and they\'ll never make anything.\\r\\n\\r\\nI will start with creating a simple helicopter system to move the helicopter. And make the propellers turn around itself.   \\r\\n\\r\\nWe can either use the `ScriptableEntity` way or use \\"raw\\" ecs. I have picked the raw ecs way since we don\'t need any callbacks \\r\\nfrom the `ScriptableEntity` api.    \\r\\n\\r\\nThe component that will be added on helicopter entity.\\r\\n```cpp\\r\\nstruct HeliComponent {\\r\\n  float Speed = 5.0f; \\r\\n  float Fuel = 1.0f;  //1.0f = Full, 0.0f = Empty\\r\\n  float Altitude = 0.0f;\\r\\n};\\r\\n```\\r\\n\\r\\nBy using the same way we have declared an engine system in the last section we now declare a system for the Helicopter entites.\\r\\n```cpp\\r\\nvoid HeliSystem::OnUpdate(Scene* scene) {\\r\\n  auto& registery = scene->m_Registry;\\r\\n    const auto view = registery.view<TransformComponent, HeliComponent>();\\r\\n    for (const auto entity : view) {\\r\\n      auto&& [transform, heli] = view.get<TransformComponent, HeliComponent>(entity);\\r\\n  \\r\\n      //Move horizontal\\r\\n      if (Input::GetKeyDown(Key::W)) {\\r\\n        transform.Translation.z += heli.Speed * Timestep::GetDeltaTime();\\r\\n      }\\r\\n      //...\\r\\n      //Other keys\\r\\n      //...\\r\\n\\r\\n      //Move vertical\\r\\n      if (Input::GetKeyDown(Key::Q) && heli.Altitude >= 0.2f) {\\r\\n        transform.Translation.y -= heli.Speed * Timestep::GetDeltaTime();\\r\\n      }\\r\\n      else if (Input::GetKeyDown(Key::E) && heli.Altitude < 8.0f) {\\r\\n        transform.Translation.y += heli.Speed * Timestep::GetDeltaTime();\\r\\n      }\\r\\n\\r\\n      heli.Fuel -= 0.1f * ImGui::GetIO().DeltaTime;\\r\\n      heli.Altitude = transform.Translation.y;\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\nFor rotating the propeller just getting the transform component and adding a constant value to y rotation would work for now. \\r\\n\\r\\n```cpp\\r\\nauto ent = Oxylus::Entity { entity, m_Scene.get() };\\r\\nent.GetChild(1).GetComponent<Oxylus::TransformComponent>().Rotation.y += 5.0f;\\r\\n```\\r\\n\\r\\nOther gameplay element we could add is picking up crates from ground.   \\r\\nSame way we have crated the heli system now we can create a system for crates.\\r\\n```cpp\\r\\nconst auto heliView = scene->m_Registry.view<TransformComponent, HeliComponent>();\\r\\nconst auto crateView = scene->m_Registry.view<TransformComponent, CrateComponent>();\\r\\nfor (const auto entity : crateView) {\\r\\n  auto&& [transform, crate] = crateView.get<TransformComponent, CrateComponent>(entity);\\r\\n  //a simple intersection check\\r\\n  constexpr float axisThreshold = 0.5f;\\r\\n  for (const auto heliEntity : heliView) {\\r\\n    auto&& [heliTransform, heli] = heliView.get<TransformComponent, HeliComponent>(heliEntity);\\r\\n    if (std::abs(transform.Translation.x - heliTransform.Translation.x) < axisThreshold\\r\\n        && std::abs(transform.Translation.y + 0.2f - heliTransform.Translation.y) < axisThreshold\\r\\n        && std::abs(transform.Translation.z - heliTransform.Translation.z) < axisThreshold) {\\r\\n      heli.CratesTaken += 1;\\r\\n      const auto ent = Entity{entity, scene};\\r\\n      scene->DestroyEntity(ent);\\r\\n      break;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n```\\r\\n![Crates](https://cdn.discordapp.com/attachments/1022588581237248060/1088469165813268510/crates.gif)\\r\\n\\r\\n\\r\\n## UI \\r\\nFor creating a game UI we can use `OxUI` api which uses Dear ImGui underneath for drawing and layouts.\\r\\nCyclone has a HUD that contains instrumentation which includes speed, altitude, fuel remaining and time remaining.\\r\\nAdditionally there is also information on the number of supply crates, whether the player\'s current view is North \\r\\nor South, information on wind force and a warning to the player of the cyclone\'s proximity and any approaching planes.     \\r\\nFor now I will just display altitude, remaining fuel and time.\\r\\n```cpp\\r\\nOxUI::BeginUI();\\r\\nOxUI::ProgressBar(\\"Time\\", Time);\\r\\nOxUI::ProgressBar(\\"Fuel\\", Heli.Fuel);\\r\\nOxUI::Property(\\"Altitude\\", \\"%.1f\\", Heli.Altitude);\\r\\nOxUI::EndUI();\\r\\n```\\r\\n![UI](https://cdn.discordapp.com/attachments/1022588581237248060/1087718914886221904/image.png)\\r\\n\\r\\n\\r\\n# TO BE CONTINUED..."},{"id":"oxylus-engine-intro","metadata":{"permalink":"/blog/oxylus-engine-intro","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oxylus-engine-intro/2023-01-15-oxylus-engine-intro.md","source":"@site/blog/oxylus-engine-intro/2023-01-15-oxylus-engine-intro.md","title":"Oxylus Engine - Introduction","description":"My own engine I have been working on since 2022-06 in my free time. It first started as an OpenGL playground for me to learn graphics and systems programming but then I realised I won\'t go far with OpenGL and switched my whole engine to Vulkan in a month. And I started working on it more seriously instead of just treating it as a playground. Now it is a fully capable engine with an editor of creating good looking games with the complex renderer using techniques like Tiled Forward Rendering, PBR, PCF Shadows, SSAO, Bloom etc..","date":"2023-01-15T00:00:00.000Z","formattedDate":"January 15, 2023","tags":[{"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":0.49,"hasTruncateMarker":false,"authors":[{"name":"Hatrickek","url":"https://github.com/Hatrickek","imageURL":"https://avatars.githubusercontent.com/u/89982837?v=4","key":"Hatrickek"}],"frontMatter":{"slug":"oxylus-engine-intro","title":"Oxylus Engine - Introduction","authors":["Hatrickek"],"tags":["blog"]},"prevItem":{"title":"Creating A Game With Oxylus","permalink":"/blog/oxylus-first-game"},"nextItem":{"title":"Why I Created This Blog","permalink":"/blog/why-i-created"}},"content":"My own engine I have been working on since 2022-06 in my free time. It first started as an OpenGL playground for me to learn graphics and systems programming but then I realised I won\'t go far with OpenGL and switched my whole engine to Vulkan in a month. And I started working on it more seriously instead of just treating it as a playground. Now it is a fully capable engine with an editor of creating good looking games with the complex renderer using techniques like Tiled Forward Rendering, PBR, PCF Shadows, SSAO, Bloom etc..\\n\\n![Oxylus Editor](OxylusEditor.png)"},{"id":"why-i-created","metadata":{"permalink":"/blog/why-i-created","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-14-first-blog-post.md","source":"@site/blog/2023-01-14-first-blog-post.md","title":"Why I Created This Blog","description":"Having a personal website is a great way to stay motivated and productive. By regularly updating my website with new blog posts,","date":"2023-01-14T00:00:00.000Z","formattedDate":"January 14, 2023","tags":[{"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":0.625,"hasTruncateMarker":false,"authors":[{"name":"Hatrickek","url":"https://github.com/Hatrickek","imageURL":"https://avatars.githubusercontent.com/u/89982837?v=4","key":"Hatrickek"}],"frontMatter":{"slug":"why-i-created","title":"Why I Created This Blog","authors":["Hatrickek"],"tags":["blog"]},"prevItem":{"title":"Oxylus Engine - Introduction","permalink":"/blog/oxylus-engine-intro"}},"content":"Having a personal website is a great way to stay motivated and productive. By regularly updating my website with new blog posts,\\r\\nI am able to share my process and techniques with others, which in turn inspires me to work harder and finish projects that I have started.\\r\\n\\r\\nAdditionally, writing about my work helps me to be more creative and generate new ideas. By documenting my progress and explaining how I implemented certain features, \\r\\nI\'m able to deepen my understanding of that subject matter since writing about it requires more knowledge than just implementing it. And my website could serve as a platform to advertise my future projects, allowing me to share my ideas with a wider audience and reach new heights in my journey."}]}')}}]);