export function sendContent({ props }) {
  props.sender.send('file-content', props.content);
}
