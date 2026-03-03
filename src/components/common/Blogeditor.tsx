"use client";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { marked } from "marked";
import {
  Bold,
  Code,
  Eraser,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Quote,
  Strikethrough,
  Table as TableIcon,
  Underline as UnderlineIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  active = false,
  disabled = false,
  children,
  title,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "p-2 rounded-md transition-colors hover:bg-muted",
      active ? "bg-blue-100 text-blue-600" : "text-muted-foreground",
      disabled && "opacity-30 cursor-not-allowed",
    )}
  >
    {children}
  </button>
);

function isMarkdown(text: string): boolean {
  return /^#{1,6}\s|^\*\*|\*[^*\s]|^-\s|^\d+\.\s|^>\s|^```|^\[.+\]\(|^---/.test(
    text.trim(),
  );
}

interface BlogEditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  initialContent,
  onChange,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);
  const [exportedHtml, setExportedHtml] = useState("");
  const [exportedJson, setExportedJson] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded",
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "border-collapse table-auto w-full",
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content:
      initialContent ||
      "<h2>Start writing your blog...</h2><p>This is a rich text editor with full formatting features!</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg focus:outline-none min-h-[400px] p-4 max-w-none",
      },
      handlePaste: (_view, event) => {
        const clipboardData = event.clipboardData;
        if (!clipboardData) return false;

        const html = clipboardData.getData("text/html");
        const text = clipboardData.getData("text/plain");

        // If HTML is available (paste from browser/website), let Tiptap handle it
        if (html && html.trim().length > 0) return false;

        // If plain text looks like markdown, convert it
        if (text && isMarkdown(text)) {
          const converted = marked.parse(text) as string;
          // Use a timeout to let the editor focus settle
          setTimeout(() => {
            editor?.commands.insertContent(converted);
          }, 0);
          return true;
        }

        return false;
      },
    },
    onUpdate: ({ editor: e }) => {
      onChange?.(e.getHTML());
    },
  });

  useEffect(() => {
    if (editor && initialContent && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  if (!editor) {
    return null;
  }

  const addImage = (): void => {
    if (imageUrl.trim()) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      setShowImageDialog(false);
    }
  };

  const addLink = (): void => {
    if (linkUrl.trim()) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkDialog(false);
    }
  };

  const insertTable = (): void => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
    setShowTableMenu(false);
  };

  const exportHtml = (): void => {
    setExportedHtml(editor.getHTML());
    setExportedJson("");
    setShowPreview(true);
  };

  const exportJson = (): void => {
    setExportedJson(JSON.stringify(editor.getJSON(), null, 2));
    setExportedHtml("");
    setShowPreview(true);
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const isEmbedded = !!onChange;
  const isInTable = editor.isActive("table");

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="border border-border rounded-t-lg bg-muted/50 p-2 flex flex-wrap gap-1">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="Bold (Ctrl+B)"
        >
          <Bold size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="Italic (Ctrl+I)"
        >
          <Italic size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          title="Underline (Ctrl+U)"
        >
          <UnderlineIcon size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough size={18} />
        </ToolbarButton>

        <div className="w-px h-8 bg-border mx-1" />

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          active={editor.isActive("heading", { level: 1 })}
          title="Heading 1"
        >
          <Heading1 size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          <Heading2 size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          <Heading3 size={18} />
        </ToolbarButton>

        <div className="w-px h-8 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <List size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Numbered List"
        >
          <ListOrdered size={18} />
        </ToolbarButton>

        <div className="w-px h-8 bg-border mx-1" />

        <ToolbarButton
          onClick={() => setShowLinkDialog(true)}
          active={editor.isActive("link")}
          title="Insert Link"
        >
          <Link2 size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => setShowImageDialog(true)}
          active={showImageDialog}
          title="Insert Image"
        >
          <ImageIcon size={18} />
        </ToolbarButton>

        <div className="w-px h-8 bg-border mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive("codeBlock")}
          title="Code Block"
        >
          <Code size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="Blockquote"
        >
          <Quote size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal Rule"
        >
          <Minus size={18} />
        </ToolbarButton>

        <div className="w-px h-8 bg-border mx-1" />

        {/* Table button */}
        <div className="relative">
          <ToolbarButton
            onClick={() => setShowTableMenu((v) => !v)}
            active={isInTable || showTableMenu}
            title="Table"
          >
            <TableIcon size={18} />
          </ToolbarButton>
          {showTableMenu && (
            <div className="absolute top-full left-0 mt-1 z-50 bg-popover border border-border rounded-lg shadow-lg p-2 min-w-45">
              <button
                type="button"
                onClick={insertTable}
                className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors"
              >
                Insert 3×3 table
              </button>
              {isInTable && (
                <>
                  <div className="h-px bg-border my-1" />
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().addColumnBefore().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors"
                  >
                    Add column before
                  </button>
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().addColumnAfter().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors"
                  >
                    Add column after
                  </button>
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().deleteColumn().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors text-destructive"
                  >
                    Delete column
                  </button>
                  <div className="h-px bg-border my-1" />
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().addRowBefore().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors"
                  >
                    Add row before
                  </button>
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().addRowAfter().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors"
                  >
                    Add row after
                  </button>
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().deleteRow().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors text-destructive"
                  >
                    Delete row
                  </button>
                  <div className="h-px bg-border my-1" />
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().deleteTable().run(); setShowTableMenu(false); }}
                    className="w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors text-destructive"
                  >
                    Delete table
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
          title="Clear Formatting"
        >
          <Eraser size={18} />
        </ToolbarButton>
      </div>

      {/* Editor */}
      <div
        className="border border-border border-t-0 rounded-b-lg h-125 overflow-y-auto bg-background"
        onClick={() => setShowTableMenu(false)}
      >
        <EditorContent editor={editor} />
      </div>

      {/* Export Buttons — only show in standalone mode */}
      {!isEmbedded && (
        <div className="mt-4 flex gap-3">
          <Button onClick={exportHtml}>Export as HTML</Button>
          <Button variant="outline" onClick={exportJson}>
            Export as JSON
          </Button>
        </div>
      )}

      {/* Preview — standalone mode only */}
      {!isEmbedded && showPreview && (exportedHtml || exportedJson) && (
        <div className="mt-4 border border-border rounded-lg p-4 bg-muted/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              {exportedHtml ? "HTML Output" : "JSON Output"}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                copyToClipboard(exportedHtml || exportedJson)
              }
            >
              Copy
            </Button>
          </div>
          <pre className="text-xs overflow-auto max-h-60 p-3 bg-background rounded border border-border">
            {exportedHtml || exportedJson}
          </pre>
        </div>
      )}

      {/* Image URL Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Insert Image</DialogTitle>
            <DialogDescription>
              Paste an image URL to embed it in the content.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <Label htmlFor="image-url">Image URL</Label>
            <Input
              id="image-url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addImage()}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowImageDialog(false);
                setImageUrl("");
              }}
            >
              Cancel
            </Button>
            <Button onClick={addImage}>Insert Image</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Link URL Dialog */}
      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Insert Link</DialogTitle>
            <DialogDescription>
              Enter a URL to create a hyperlink.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <Label htmlFor="link-url">URL</Label>
            <Input
              id="link-url"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addLink()}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowLinkDialog(false);
                setLinkUrl("");
              }}
            >
              Cancel
            </Button>
            <Button onClick={addLink}>Insert Link</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogEditor;
