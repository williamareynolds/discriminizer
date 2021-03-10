import {discriminize} from '../src'

interface PushEvent {
  pusherName: string
  pusherEmail: string
}

interface PullEvent {
  pullerName: string
  pullerEmail: string
}

const pullEventDummy: PullEvent = {
  pullerEmail: '',
  pullerName: '',
}

const pushEventDummy: PushEvent = {
  pusherEmail: '',
  pusherName: '',
}

test('it can discriminate simple shallow objects', () => {
  const discriminizeDummy = discriminize('tag')([
    ['pull', pullEventDummy],
    ['push', pushEventDummy],
  ])

  const pull = {
    pullerEmail: 'person@internet.com',
    pullerName: 'person'
  }

  const push = {
    pusherEmail: 'human@website.net',
    pusherName: 'human'
  }

  expect(discriminizeDummy(pull)).toStrictEqual({
    ...pull,
    tag: 'pull'
  })
  expect(discriminizeDummy(push)).toStrictEqual({
    ...push,
    tag: 'push'
  })
})
