const componentPageInfo = {
  title: 'Buttons',
  usageCode: `import { JcrewButtons } from 'jcrew-commons'`,
  components: [
    {
      title: 'primary',
      copy: 'This is for general purposes',
      code: (
        `<JcrewButton theme='blue'>
          Primary
        </JcrewButton>`),
    },
    {
      title: 'secondary',
      copy: 'This is for specific purposes',
      code: (
        `<JcrewButton theme='secondary'>
          Primary
        </JcrewButton>`),
    },
  ]
}

<div>
  <h1>{title}</h1>
  <SyntaxBlock
    code={usageCode}
    noExpand
    autoHeight
  />
  <div>
    <section class="commons--content-usage">
      <div class="commons--content-examples">
      {components.map(val => (
      <dl>
        <dt><button class="button"></button></dt>
        <dd>Unstyled button</dd>
      </dl>
      <dl>
        <dt>
          <JcrewButton
            theme='blue'
          >
            Primary
          </JcrewButton>
          </dt>
        </dl>
      ))}
