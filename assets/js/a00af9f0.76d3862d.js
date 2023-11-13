"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[822],{4047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(25773),o=(a(27378),a(35318)),s=a(92975);const i={title:"Release Notes - Podman Desktop 1.5",description:"Podman Desktop 1.5 has been released!",slug:"podman-desktop-release-1.5",authors:"duffy",tags:["podman-desktop","release","kubernetes","openshift","onboarding","compose","extensions","settings"],hide_table_of_contents:!1,image:"/blog/img/podman-desktop-release-1.5/onboarding-selkies.png"},r=void 0,p={permalink:"/blog/podman-desktop-release-1.5",source:"@site/blog/2023-11-03-release-1.5.md",title:"Release Notes - Podman Desktop 1.5",description:"Podman Desktop 1.5 has been released!",date:"2023-11-03T00:00:00.000Z",formattedDate:"November 3, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"},{label:"onboarding",permalink:"/blog/tags/onboarding"},{label:"compose",permalink:"/blog/tags/compose"},{label:"extensions",permalink:"/blog/tags/extensions"},{label:"settings",permalink:"/blog/tags/settings"}],readingTime:8.14,hasTruncateMarker:!1,authors:[{name:"M\xe1ir\xedn Duffy",title:"User Experience Designer",url:"https://github.com/mairin",imageURL:"https://github.com/mairin.png",key:"duffy"}],frontMatter:{title:"Release Notes - Podman Desktop 1.5",description:"Podman Desktop 1.5 has been released!",slug:"podman-desktop-release-1.5",authors:"duffy",tags:["podman-desktop","release","kubernetes","openshift","onboarding","compose","extensions","settings"],hide_table_of_contents:!1,image:"/blog/img/podman-desktop-release-1.5/onboarding-selkies.png"},nextItem:{title:"Release Notes - Podman Desktop 1.4",permalink:"/blog/podman-desktop-release-1.4"}},l={authorsImageUrls:[void 0]},m=[{value:"Release Details",id:"release-details",level:2},{value:"Onboarding",id:"onboarding",level:3},{value:"Command Palette",id:"command-palette",level:3},{value:"Expanded &quot;Summary&quot; tab for Kubernetes pods",id:"expanded-summary-tab-for-kubernetes-pods",level:3},{value:"Environment file support",id:"environment-file-support",level:3},{value:"Enhancements to the Settings area",id:"enhancements-to-the-settings-area",level:3},{value:"Improved user experience for state changes",id:"improved-user-experience-for-state-changes",level:3},{value:"Extension API improvements",id:"extension-api-improvements",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2},{value:"Known Issues",id:"known-issues",level:3},{value:"Known Issues: Podman Desktop 1.5.2",id:"known-issues-podman-desktop-152",level:4},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}],d={toc:m};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman Desktop 1.5 Release! \ud83c\udf89"),(0,o.kt)("p",null,"With this release of Podman Desktop, we're introducing ",(0,o.kt)("strong",{parentName:"p"},"a new onboarding feature")," that we hope will earn your \ud83e\uddad seal of approval! But wait... there's so much more!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Onboarding"),": Guided setup and configuration of ",(0,o.kt)("strong",{parentName:"li"},"Podman")," and ",(0,o.kt)("strong",{parentName:"li"},"Compose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman 4.7.2"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/releases"},"Podman 4.7.2")," is now included in Windows and Mac installers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command Palette"),": Gain easy access to various commands via a new keyboard-driven command palette"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Expanded "Summary" tab for Kubernetes pods'),': Go deep with extended details on Kubernetes pods in the pod "Summary" tab'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Environment file support"),": Chart out environment variables for new containers to access on creation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enhancements to the Settings area"),": Get your bearings with improved Docker compatibility mode controls"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Improved user experience for state changes"),": No more dead reckoning on container state with improved visual indication of status"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extension API improvements"),": A boatload of improvements to the extension API enabling more goodness from \ud83e\uddad Podman Desktop's extensions")),(0,o.kt)("p",null,"Podman Desktop 1.5 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podman-desktop-1-5-hero",src:a(90973).Z,width:"1920",height:"1080"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"onboarding"},"Onboarding"),(0,o.kt)("p",null,"We are introducing a new feature providing guided flows for the initial setup of specific \ud83e\uddad Podman Desktop extensions. Release 1.5 features two new onboarding flows: Podman and Compose."),(0,o.kt)("p",null,'To start the Podman onboarding flow, you can start from the dashboard notification by clicking the "Set up" button:\n',(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/799683/280362279-598cc052-5ea4-4c31-849c-da9bbbcc3e42.png",alt:"podman-onboarding-start"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/799683/280363859-f35b85f8-1dd4-4b7f-a995-25fe5d1ccced.png",alt:"podman-onboarding"})),(0,o.kt)("p",null,"Visit ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Resources"),' screen and click the Compose "Setup ..." button in order to start Compose onboarding:\n',(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/799683/280276847-ca0558ab-70ad-48cc-8dd5-67e3eb465a62.png",alt:"compose-onboarding-start"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/799683/280277936-77ba0fb2-5cb0-41de-a7cf-1a3d6400fd89.png",alt:"compose-onboarding"})),(0,o.kt)("h3",{id:"command-palette"},"Command Palette"),(0,o.kt)("p",null,"A new, search-driven command palette is now available to enable quick access to various commands available across \ud83e\uddad Podman Desktop. You can try this new tool out by hitting the F1 key. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4081"},"#4081")," ","&","&"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3979"},"#3979")),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/270362431-5aaa6a1b-6df5-4b66-a811-cdd148d02ad6.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"expanded-summary-tab-for-kubernetes-pods"},'Expanded "Summary" tab for Kubernetes pods'),(0,o.kt)("p",null,'Kubernetes pods now offer a more comprehensive set of information under the "Summary" tab, including networking, volumes, environment variables, and other key metadata.'),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/272972815-bed96f3a-6b13-45d3-a13b-74eacb27a4cd.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"environment-file-support"},"Environment file support"),(0,o.kt)("p",null,"When creating a container from the Images list, there's now an option to provide an environment file to set env variables for the new container. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4026"},"#4026")," ","&","&"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4025"},"#4025")),(0,o.kt)("h3",{id:"enhancements-to-the-settings-area"},"Enhancements to the Settings area"),(0,o.kt)("p",null,"The user experience for enabling or disabling Docker compatibility is improved, with a new entry in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences")," screen that includes contextual guidance. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4093"},"#4093")),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/270497318-902b2566-62ad-4ee6-87af-6a9a2705de99.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"improved-user-experience-for-state-changes"},"Improved user experience for state changes"),(0,o.kt)("p",null,"The user experience around state changes for containers, pods, and other objects in the UI is improved, with clear status messages and improved animated visual indicator of state changes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4056"},"#4056")),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/19958075/270027524-f5176cf9-462f-4024-920a-b4a906c7d30d.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/19958075/270027533-70e152ec-5bbf-45ad-9f1d-563752464655.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"extension-api-improvements"},"Extension API improvements"),(0,o.kt)("p",null,"The \ud83e\uddad Podman Desktop extension API received many improvements, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In addition to pushing and listing image from an extension, it's now possible to pull images from a \ud83e\uddad Podman Desktop extension ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4155"},"#4155"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The \ud83e\uddad Podman Desktop extension API has been enhanced with both the ability to list images ","&"," networks and the ability to create containers ","&"," networks. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4172"},"#4172"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83e\uddad Podman Desktop extensions now have a consistent way to run administrative tasks. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4049"},"#4049"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extensions now have the ability to register a custom Kubernetes config generator. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3970"},"#3970"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ability of extensions to add commands to UI menus has been extended; previously for action menus it was only available in the Image list screen. It is now possible for extensions to add commands to the action menus of items listed on the Containers list screen as well. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3947"},"#3947")," ","&"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3963"},"#3963"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extensions have gained the ability to contribute menu items in the UI based on specific conditions. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3959"},"#3959"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enhanced logic for displaying or hiding properties listed under the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences")," screens is now available. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4159"},"#4159")))),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/271650937-3991565c-12a4-4e6c-a315-9343bfa25f65.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-notable-enhancements"},"Other Notable Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The progress of loading an image into Kind is now visible as a task in the task manager. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/4061"},"#4061"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42176370/270154775-eb7007b4-fd0e-4287-be9e-40ffc412de35.png",alt:"kind-progress-task"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's now possible to start a new Podman machine right after creation, or you can create it and wait to start it later. It's up to you! ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/4046"},"#4046"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/269941187-f4768833-ecfc-4d0b-8acf-d4afedb428d9.png",alt:"podman-start-now-or-later"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Podman machine and Kubernetes provider creation forms have an updated look & feel consisted with other forms in the user interface, along with minor bug fixes. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/4317"},"#4317"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/274694157-fe89f3bc-e5b8-4735-96e9-669fe52c7a41.png",alt:"Updated provider creation forms"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The empty screen message shown when a search filter results in no matches now provides a message specific to filter matching, including the specific filter terms and an explicit button for clearing the filter. Previously, the screen displayed a generic message about how to create new objects of the type displayed on the screen, which led to some confusion about the status of the system. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3988"},"#3988"))),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/19958075/269291090-13e724f7-252f-4915-bb04-00665001d21d.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"New support for adding spin animations to icons is now available. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4188"},"#4188"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is a new indeterminate progress bar type available for the task manager; this is meant for providing limited status for actions whose APIs do not provide detailed status information. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4016"},"#4016"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For authenticating as admin to perform administrative tasks, \ud83e\uddad Podman Desktop now provides touchID support for macOS. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4050"},"#4050")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/436777/248588015-f08115bd-d211-43ad-bddd-286d7b3a7056.png",alt:"touchID-support"})),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/269859758-47581e2b-8469-4e9c-822c-f4fddf46684d.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for connecting to interactive terminals for containers via tty was added. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3900"},"#3900"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's now more clear which container/pod providers will autostart when \ud83e\uddad Podman Desktop starts. Previously autostart had both a global and a per-provider setting. It has been simplified by removing the global setting. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3840"},"#3840"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The "Working with containers" section of the documentation has been reworked and improved. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3951"},"#3951")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The disable registry command was not blocking subsequent pulls from disabled registries. This has been corrected. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4183"},"#4183"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some users behind network proxies were unable to complete workflow involving the download of online resources. The mechanism for fetching these resources has been fixed to be proxy compatible to address this issue. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3994"},"#3994"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The status of pods running in Kubernetes that are undergoing the deletion process is now accurately reflected in the \ud83e\uddad Podman Desktop UI. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3877"},"#3877"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The image details page always listed the image as being "not used" even when it was. This has been corrected. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3985"},"#3985"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Previously, deleting a specific image tag would cause all tags with the same Image ID to be deleted. This has been fixed so only the selected image tag will be deleted. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3837"},"#3837"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Could not view the pod details for some remote Kubernetes cluster pods due to an encoding error. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4371"},"#4371"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Error logs were being tracked separately from the actions they applied to. This has been addressed for kind cluster creation failure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4427"},"#4427")," and Compose installation failure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4407"},"#4407"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'For Linux users, \ud83e\uddad Podman Desktop previously did not appear under the "Development" menu when installed via Flatpak; it appeared under "Utilities." \ud83e\uddad Podman Desktop now appears under the "Development" menu. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3911"},"#3911"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Podman Machine names are no longer prefixed with the "Podman Machine" string. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3878"},"#3878")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/267378447-aafdfbd7-f005-4b94-8626-9e11eec61b95.png",alt:"touchID-support"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The initial action state of pods and containers was being displayed as "STARTING" regardless of actual state; this has been corrected. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3889"},"#3889"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resizing the application window no longer makes the last lines of a container's terminal invisible. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3993"},"#3993"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An issue with incorrect terminal behavior in response to long lines in the terminal attached to a container has been resolved. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3955"},"#3955"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A spacing issue on the run image form has been corrected. ","[#4089]",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4089"},"https://github.com/containers/podman-desktop/pull/4089"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The "podify" icon & button on the Containers list was unusually large in release 1.4. That regression has been corrected in this release. ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4122"},"#4122"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An error in the instructions for Windows users on migrating from Docker has been corrected. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4157"},"#4157")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"community-thank-you"},"Community Thank You"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make \ud83e\uddad Podman Desktop even better. In this\nrelease we received pull requests from the following people:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/afbjorklund"},"afbjorklund")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4373"},"#4373 - docs: fix broken links and add lima onboarding"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4372"},"#4372 - docs: clear up lima column on containers page"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4091"},"#4091 - fix: avoid errors with unexpected JSON input"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4098"},"#4098 - docs: Lima onboarding details"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3854"},"#3854 - fix: check if machine init rootful flag supported"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/axel7083"},"axel7083")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4061"},"#4061 - feat: adding task progress for kind"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3970"},"#3970 - feat: extension can register custom kube generator"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3959"},"#3959 - feat: add when property to extensions menus"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4016"},"#4016 - feat: indeterminate progress bar"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3963"},"#3963 - fix: ContainerList propagating containers in ComposeActions and PodActions"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/3947"},"#3947 - feat: extend menus capabilities"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ayushrakesh"},"ayushrakesh")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4415#"},"#4415 - Update README.md"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/eltociear"},"eltociear")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4194"},"#4194 - Update README.md"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/foxydevloper"},"foxydeveloper")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4157"},"#4157 - docs: Correct windows instructions for migrating from docker"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/harsh-solanki21"},"harsh-solanki21")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4162"},"#4162 - fix: Removed fullstop from summary"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/rahul0x00"},"rahul0x00")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4240"},"#4240 - fix typos in README.md"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/shelar1423"},"shelar1423")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/4221"},"#4221 - chore: document property setting in EXTENSIONS.md")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"final-notes"},"Final notes"),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("p",null,"We have a discussion board topic where we have posted known issues with this release. If you run into problems, please check this list before filing a bug - if we already have an issue open for it, it saves you the time and trouble of filing, and there may be a workaround posted in the issue."),(0,o.kt)("h4",{id:"known-issues-podman-desktop-152"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/discussions/4635"},"Known Issues: Podman Desktop 1.5.2")),(0,o.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.5.0"},"here"),"."),(0,o.kt)("h3",{id:"where-to-download"},"Where to Download"),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}h.isMDXComponent=!0},90973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/onboarding-selkies-3ddb7cb6ee2cf9abed002b01f63b1822.png"}}]);