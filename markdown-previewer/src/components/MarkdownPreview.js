import './MarkPrev.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable({ breaks: true });

export default function MarkdownPreview({ markdown }) {
  const renderedHTML = md.render(markdown);
  return (
    <div className="Preview">
        <header>Preview</header>
        <div id='preview' dangerouslySetInnerHTML={{__html: renderedHTML}} />
    </div>
    );
}