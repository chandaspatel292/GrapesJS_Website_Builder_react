import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import websitePlugin from "grapesjs-preset-webpage";
import basicBlockPlugin from "grapesjs-blocks-basic";
import formPlugin from "grapesjs-plugin-forms";
import customCodePlugin from "grapesjs-custom-code";
import grapesjsSignaturePad from "grapesjs-signature-pad";
/* import grapesjsRTE from "grapesjs-rte-extensions"; */
import grapesjsTable from "grapesjs-table";
import grapesjsFonts from "grapesjs-typography-fonts";
import navbarPlugin from "grapesjs-navbar";
import zoomPlugin from "grapesjs-zoom-plugin";
import pageManagerPlugin from "grapesjs-project-manager";
import ckEditorPlugin from "grapesjs-plugin-ckeditor";

/* import quillEditor from "gjs-quill";
 */
function WebBuilder() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: 1,
      height: 600,
      width: "100%",
      plugins: [
        websitePlugin,
        basicBlockPlugin,
        formPlugin,
        customCodePlugin,
        grapesjsSignaturePad,
        /* grapesjsRTE, */
        grapesjsTable,
        grapesjsFonts,
        navbarPlugin,
        zoomPlugin,
        pageManagerPlugin,
        ckEditorPlugin,
        /* quillEditor */
      ],
      pluginsOpts: {
        [ckEditorPlugin]: {
          options: {
            language: "en",
            startupFocus: true,
            extraAllowedContent: "*(*);*{*}", // Allows any class and any inline style
            allowedContent: true, // Disable auto-formatting, class removing, etc.
            enterMode: CKEDITOR.ENTER_BR,
            uiColor: "#0000001a", // Inline editor color
            extraPlugins: `dialogui,dialog,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,
              notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,
              colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,
              resize,elementspath,enterkey,entities,exportpdf,popup,filetools,
              filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,
              forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,
              indentblock,indentlist,smiley,justify,menubutton,language,link,list,
              liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastetools,
              pastefromgdocs,pastefromword,preview,print,removeformat,save,selectall,
              showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,
              tabletools,tableselection,undo,lineutils,widgetselection,widget,
              notificationaggregator,uploadwidget,uploadimage,wsc`,
            toolbar: [
              {
                name: "document",
                items: [
                  "Source",
                  "-",
                  "Save",
                  "NewPage",
                  "ExportPdf",
                  "Preview",
                  "Print",
                  "-",
                  "Templates",
                ],
              },
              {
                name: "clipboard",
                items: [
                  "Cut",
                  "Copy",
                  "Paste",
                  "PasteText",
                  "PasteFromWord",
                  "-",
                  "Undo",
                  "Redo",
                ],
              },
              {
                name: "editing",
                items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"],
              },
              {
                name: "forms",
                items: [
                  "Form",
                  "Checkbox",
                  "Radio",
                  "TextField",
                  "Textarea",
                  "Select",
                  "Button",
                  "ImageButton",
                  "HiddenField",
                ],
              },
              "/",
              {
                name: "basicstyles",
                items: [
                  "Bold",
                  "Italic",
                  "Underline",
                  "Strike",
                  "Subscript",
                  "Superscript",
                  "-",
                  "CopyFormatting",
                  /* "RemoveFormat", */
                ],
              },
              {
                name: "paragraph",
                items: [
                  "NumberedList",
                  "BulletedList",
                  "-",
                  "Outdent",
                  "Indent",
                  "-",
                  "Blockquote",
                  "CreateDiv",
                  "-",
                  "JustifyLeft",
                  "JustifyCenter",
                  "JustifyRight",
                  "JustifyBlock",
                  "-",
                  "BidiLtr",
                  "BidiRtl",
                  "Language",
                ],
              },
              { name: "links", items: ["Link", "Unlink" /* "Anchor" */] },
              {
                name: "insert",
                items: [
                  "Image",
                  "Table",
                  "HorizontalRule",
                  "Smiley",
                  "SpecialChar",
                  "PageBreak",
                  "Iframe",
                ],
              },
              "/",
              {
                name: "styles",
                items: ["Styles", "Format", "Font", "FontSize"],
              },
              { name: "colors", items: ["TextColor", "BGColor"] },
              { name: "tools", items: ["Maximize", "ShowBlocks"] },
              { name: "about" },
            ],
            shouldNotGroupWhenFull: true,
            removeButtons: "NewPage",
          },
        },
      },
      storageManager: true,
      pageManager: true,
    });

    // You can add more custom blocks if needed
    // editor.BlockManager.add("another-custom-block", {
    //   label: "Another Custom Block",
    //   attributes: { class: "another-custom-class" },
    //   content: {
    //     type: "another-custom-type",
    //     content: "Another custom block content",
    //   },
    // });

    // Save or update the editor's content as needed
    // editor.Commands.add("custom-save-command", {
    //   run: function (editor, sender) {
    //   },
    // });
  }, []);

  return <div id="gjs"></div>;
}

export default WebBuilder;
