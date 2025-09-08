// "use client";

// import Link from "next/link";
// import { Zap } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function LogoDropDown() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <div className="flex bg-gray-800 px-3 py-1 rounded-3xl cursor-pointer items-center gap-1">
//           <Zap className="h-4 w-4" />
//         </div>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         className="w-64 bg-neutral-900 text-neutral-200"
//         align="start"
//       >
//         {/* Search */}
//         <div className="px-2 py-1">
//           <input
//             placeholder="Type to search..."
//             className="w-full rounded-md bg-neutral-800 px-2 py-1 text-sm outline-none"
//           />
//         </div>

//         {/* Dashboard */}
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Link href="/dashboard">Go to Dashboard</Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>

//         <DropdownMenuSeparator />

//         {/* Quick Actions */}
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Link href="/quickaction">Quick Actions...</Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>

//         <DropdownMenuSeparator />

//         {/* File */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>File</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>New</DropdownMenuItem>
//             <DropdownMenuItem>Open...</DropdownMenuItem>
//             <DropdownMenuItem>Save</DropdownMenuItem>
//             <DropdownMenuItem>Save As...</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Export</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Edit */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Edit</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Undo</DropdownMenuItem>
//             <DropdownMenuItem>Redo</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Cut</DropdownMenuItem>
//             <DropdownMenuItem>Copy</DropdownMenuItem>
//             <DropdownMenuItem>Paste</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* View */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>View</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Zoom In</DropdownMenuItem>
//             <DropdownMenuItem>Zoom Out</DropdownMenuItem>
//             <DropdownMenuItem>Fullscreen</DropdownMenuItem>
//             <DropdownMenuItem>Grid</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Tool */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Tool</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Move</DropdownMenuItem>
//             <DropdownMenuItem>Frame</DropdownMenuItem>
//             <DropdownMenuItem>Pen</DropdownMenuItem>
//             <DropdownMenuItem>Text</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Layout */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Layout</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Align Left</DropdownMenuItem>
//             <DropdownMenuItem>Align Center</DropdownMenuItem>
//             <DropdownMenuItem>Align Right</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Distribute Horizontally</DropdownMenuItem>
//             <DropdownMenuItem>Distribute Vertically</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Component */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Component</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Create Component</DropdownMenuItem>
//             <DropdownMenuItem>Detach Instance</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Preview */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Preview</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Presentation Mode</DropdownMenuItem>
//             <DropdownMenuItem>Prototype</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Plugins */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Plugins</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Manage Plugins</DropdownMenuItem>
//             <DropdownMenuItem>Browse Plugins</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Code */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Code</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Inspect</DropdownMenuItem>
//             <DropdownMenuItem>Copy CSS</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         {/* Preferences */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Preferences</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuItem>Shortcuts</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>

//         <DropdownMenuSeparator />

//         {/* Footer */}
//         <DropdownMenuSub>
//           <DropdownMenuSubTrigger>Site Settings</DropdownMenuSubTrigger>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>General</DropdownMenuItem>
//             <DropdownMenuItem>Account</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuSub>
//         <DropdownMenuItem>Help</DropdownMenuItem>
//         <DropdownMenuItem>Your Account</DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
import { Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function LogoDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex bg-gray-800 px-3 py-1 rounded-3xl cursor-pointer">
          <Zap />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        {/* Dashboard */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard">Go to Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* File */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>File</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Undo</DropdownMenuItem>
              <DropdownMenuItem>Redo</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Edit */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Edit</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Back</DropdownMenuItem>
              <DropdownMenuItem>Forward</DropdownMenuItem>
              <DropdownMenuItem>Cut</DropdownMenuItem>
              <DropdownMenuItem>Copy</DropdownMenuItem>
              <DropdownMenuItem>Paste</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Find Content</DropdownMenuItem>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Lock</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* View */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>View</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Appearance</DropdownMenuItem>
              <DropdownMenuItem>CMS</DropdownMenuItem>
              <DropdownMenuItem>Localization</DropdownMenuItem>
              <DropdownMenuItem>Analytics</DropdownMenuItem>
              <DropdownMenuItem>Zoom In</DropdownMenuItem>
              <DropdownMenuItem>Zoom Out</DropdownMenuItem>
              <DropdownMenuItem>Zoom to 100%</DropdownMenuItem>
              <DropdownMenuItem>Zoom to Fit</DropdownMenuItem>
              <DropdownMenuItem>Zoom to Selection</DropdownMenuItem>
              <DropdownMenuItem>Collapse Layers</DropdownMenuItem>
              <DropdownMenuItem>Show Pages</DropdownMenuItem>
              <DropdownMenuItem>Show Layers</DropdownMenuItem>
              <DropdownMenuItem>Show Assets</DropdownMenuItem>
              <DropdownMenuItem>Show Interface</DropdownMenuItem>
              <DropdownMenuItem>Show All Links</DropdownMenuItem>
              <DropdownMenuItem>Show Handoff</DropdownMenuItem>
              <DropdownMenuItem>Show Rulers</DropdownMenuItem>
              <DropdownMenuItem>Show Guides</DropdownMenuItem>
              <DropdownMenuItem>Show Pixel Grid</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Tool */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Tool</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Insert</DropdownMenuItem>
              <DropdownMenuItem>Wireframer</DropdownMenuItem>
              <DropdownMenuItem>Frame</DropdownMenuItem>
              <DropdownMenuItem>Rounded</DropdownMenuItem>
              <DropdownMenuItem>Image</DropdownMenuItem>
              <DropdownMenuItem>Video</DropdownMenuItem>
              <DropdownMenuItem>Text</DropdownMenuItem>
              <DropdownMenuItem>Link</DropdownMenuItem>
              <DropdownMenuItem>Stack</DropdownMenuItem>
              <DropdownMenuItem>Scale</DropdownMenuItem>
              <DropdownMenuItem>Vector</DropdownMenuItem>
              <DropdownMenuItem>Library</DropdownMenuItem>
              <DropdownMenuItem>Zoom</DropdownMenuItem>
              <DropdownMenuItem>Comment</DropdownMenuItem>
              <DropdownMenuItem>Cursor Chat</DropdownMenuItem>
              <DropdownMenuItem>Sample Color</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Layout */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Layout</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Add Frame</DropdownMenuItem>
              <DropdownMenuItem>Add Stack</DropdownMenuItem>
              <DropdownMenuItem>Remove Wrapper</DropdownMenuItem>
              <DropdownMenuItem>Fit Content</DropdownMenuItem>
              <DropdownMenuItem>Resize to Fit Content</DropdownMenuItem>
              <DropdownMenuItem>Bring to Front</DropdownMenuItem>
              <DropdownMenuItem>Bring Forward</DropdownMenuItem>
              <DropdownMenuItem>Send Backward</DropdownMenuItem>
              <DropdownMenuItem>Send to Back</DropdownMenuItem>
              <DropdownMenuItem>Align</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Component */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Component</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Create Component…</DropdownMenuItem>
              <DropdownMenuItem>Create From Code…</DropdownMenuItem>
              <DropdownMenuItem>Show Primary</DropdownMenuItem>
              <DropdownMenuItem>Detach From Primary</DropdownMenuItem>
              <DropdownMenuItem>Update Primary From Instance</DropdownMenuItem>
              <DropdownMenuItem>Reset Overrides</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Preview */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Preview</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Open Preview</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Plugins */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Plugins</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Browse All…</DropdownMenuItem>
              <DropdownMenuItem>Run Recent Plugin</DropdownMenuItem>
              <DropdownMenuItem>Clear Recent Plugins</DropdownMenuItem>
              <DropdownMenuItem>Open Development Plugin…</DropdownMenuItem>
              <DropdownMenuItem>Show Developer Tools</DropdownMenuItem>
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Code */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Code</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Create Code Component</DropdownMenuItem>
              <DropdownMenuItem>Create Code Override</DropdownMenuItem>
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Preferences */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Preferences</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Auto-Draft Content</DropdownMenuItem>
              <DropdownMenuItem>Use Direct Selection</DropdownMenuItem>
              <DropdownMenuItem>Auto Layout Pinning</DropdownMenuItem>
              <DropdownMenuItem>Reverse Zoom Direction</DropdownMenuItem>
              <DropdownMenuItem>Fast Zoom</DropdownMenuItem>
              <DropdownMenuItem>Animate on Zoom</DropdownMenuItem>
              <DropdownMenuItem>Keyboard Zooms to Selection</DropdownMenuItem>
              <DropdownMenuItem>Auto Switch to Layers Panel</DropdownMenuItem>
              <DropdownMenuItem>Off-Screen Content Hint</DropdownMenuItem>
              <DropdownMenuItem>Exit Canvas on Double Click</DropdownMenuItem>
              <DropdownMenuItem>Reset Default Frame Fill</DropdownMenuItem>
              <DropdownMenuItem>Nudge Amount</DropdownMenuItem>
              <DropdownMenuItem>Performance Mode</DropdownMenuItem>
              <DropdownMenuItem>Canvas Pages</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Site Settings */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Site Settings</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Open Settings</DropdownMenuItem>
              <DropdownMenuItem>General</DropdownMenuItem>
              <DropdownMenuItem>Domains</DropdownMenuItem>
              <DropdownMenuItem>Redirects</DropdownMenuItem>
              <DropdownMenuItem>Forms</DropdownMenuItem>
              <DropdownMenuItem>Versions</DropdownMenuItem>
              <DropdownMenuItem>Plans</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Help */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Help</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Watch Tutorials</DropdownMenuItem>
              <DropdownMenuItem>Browse Marketplace</DropdownMenuItem>
              <DropdownMenuItem>Start App Tour</DropdownMenuItem>
              <DropdownMenuItem>Request Feature</DropdownMenuItem>
              <DropdownMenuItem>Join Community</DropdownMenuItem>
              <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
              <DropdownMenuItem>Copy Version Number</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Your Account */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Your Account</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Select Top Parent</DropdownMenuItem>
              <DropdownMenuItem>Select Parent</DropdownMenuItem>
              <DropdownMenuItem>Select All</DropdownMenuItem>
              <DropdownMenuItem>Select All Siblings</DropdownMenuItem>
              <DropdownMenuItem>Select All Children</DropdownMenuItem>
              <DropdownMenuItem>Select All Top Parents</DropdownMenuItem>
              <DropdownMenuItem>Select All Text Layers</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
