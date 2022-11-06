import { SandpackCodeEditor, SandpackCodeViewer, SandpackFiles, SandpackPredefinedTemplate, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

interface Props { template: SandpackPredefinedTemplate; files: SandpackFiles; readonly: boolean; }

export default function SandPackComponents(props: Props) {
  const { template, files, readonly } = props
  return (
    <>
      <SandpackProvider template={template} theme={nightOwl} files={files}>
        {readonly ? <SandpackCodeViewer /> : (<><SandpackCodeEditor /><SandpackPreview /></>)}
      </SandpackProvider>
    </>
  );
}
