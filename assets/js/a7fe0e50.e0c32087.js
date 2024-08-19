"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78879],{82683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=s(24246),t=s(71670);const i={sidebar_position:21,title:"Remote access",description:"Podman Desktop can access remote instances of Podman.",tags:["podman","installing","windows","macOS"],keywords:["podman desktop","containers","podman","remote"]},a="Remote access",c={id:"podman/podman-remote",title:"Remote access",description:"Podman Desktop can access remote instances of Podman.",source:"@site/docs/podman/podman-remote.md",sourceDirName:"podman",slug:"/podman/podman-remote",permalink:"/docs/podman/podman-remote",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/podman/podman-remote.md",tags:[{inline:!0,label:"podman",permalink:"/docs/tags/podman"},{inline:!0,label:"installing",permalink:"/docs/tags/installing"},{inline:!0,label:"windows",permalink:"/docs/tags/windows"},{inline:!0,label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"Remote access",description:"Podman Desktop can access remote instances of Podman.",tags:["podman","installing","windows","macOS"],keywords:["podman desktop","containers","podman","remote"]},sidebar:"mySidebar",previous:{title:"Creating a Podman machine",permalink:"/docs/podman/creating-a-podman-machine"},next:{title:"Setting Podman machine default connection",permalink:"/docs/podman/setting-podman-machine-default-connection"}},r={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"remote-access",children:"Remote access"})}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop can manage remote Podman connections. This is facilitated through a list of connections using the command ",(0,o.jsx)(n.code,{children:"podman system connection ls"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Containers can be created, started, stopped, and deleted as if managed locally."}),"\n",(0,o.jsx)(n.p,{children:"This functionality is enabled by connecting via SSH to the Podman socket on the remote host."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ed25519"})," keys, an ",(0,o.jsx)(n.strong,{children:"SSH"})," connection, and an enabled ",(0,o.jsx)(n.strong,{children:"Podman Socket"})," are required for remote access."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/mscdex/ssh2/issues/1375",children:"RSA keys are not supported"}),"; ed25519 keys are the recommended and only current method to set up a remote connection."]}),"\n",(0,o.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"SSH access to a Linux machine with Podman installed"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop will automatically detect and show any ",(0,o.jsx)(n.code,{children:"podman system connection ls"})," connections within the GUI by enabling the setting:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Enable the remote setting",src:s(80532).Z+"",width:"1162",height:"812"})}),"\n",(0,o.jsxs)(n.p,{children:["If you have not added a remote podman connection yet, you can follow the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman/blob/main/docs/tutorials/remote_client.md",children:"official Podman guide"})," or follow the steps below:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Generate a local ed25519 key:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Copy your ",(0,o.jsx)(n.strong,{children:"public"})," ed25519 key to the server:"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Your public SSH key needs to be copied to the ",(0,o.jsx)(n.code,{children:"~/.ssh/authorized_keys"})," file on the Linux server:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh-copy-id -i ~/.ssh/id_ed25519.pub user@my-server-ip\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Enable the Podman socket on the remote connection:"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, the podman.socket is ",(0,o.jsx)(n.strong,{children:"disabled"})," in Podman installations. Enabling the systemd socket allows remote clients to control Podman."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ systemctl enable podman.socket\n$ systemctl start podman.socket\n"})}),"\n",(0,o.jsx)(n.p,{children:"Confirm that the socket is enabled by checking the status:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ systemctl status podman.socket\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Add the connection to ",(0,o.jsx)(n.code,{children:"podman system connection ls"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It's important to know which socket path you are using, as this varies between regular users and root."}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"podman info"})," to determine the correct socket path:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh user@my-server-ip podman info | grep sock\n   path: /run/user/1000/podman/podman.sock\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you are using root, it may appear as:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh root@my-server-ip podman info | grep sock\n   path: /run/podman/podman.sock\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you are ready to add the connection. Add it with a distinct name to the Podman system connection list:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# non-root\n$ podman system connection add my-remote-machine --identity ~/.ssh/id_ed25519 ssh://myuser@my-server-ip/run/user/1000/podman/podman.sock\n\n# root\n$ podman system connection add my-remote-machine --identity ~/.ssh/id_ed25519 ssh://root@my-server-ip/run/podman/podman.sock\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Check within Podman Desktop such as the ",(0,o.jsx)(n.strong,{children:"Containers"})," section that you can now access your remote instance."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"GUI verification:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Run a helloworld container on the remote machine:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ssh user@my-server-ip podman run -d quay.io/podman/hello\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Within Podman Desktop, check that your container appears in the ",(0,o.jsx)(n.strong,{children:"Containers"})," section."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CLI verification:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Set your remote connection as the default:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ podman system connection default my-remote-machine\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Verify that the container appears in the CLI:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ podman ps\n"})}),"\n",(0,o.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/containers/podman/blob/main/docs/tutorials/remote_client.md",children:"https://github.com/containers/podman/blob/main/docs/tutorials/remote_client.md"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80532:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/remote-ba955961810a1051eb78648b54cf2614.png"},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var o=s(27378);const t={},i=o.createContext(t);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);