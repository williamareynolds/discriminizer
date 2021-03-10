import {discriminize} from '../../index'
import {pullEventDummy, pushEventDummy} from './dummy-objects'

const discriminizeDummy = discriminize('tag')([
  ['pull', pullEventDummy],
  ['push', pushEventDummy]
])

const pull = discriminizeDummy({
  pullerName: 'tom',
  pullerEmail: 'tom@website.com'
})

console.log(pull)

const push = discriminizeDummy({
  pusherName: 'mike',
  pusherEmail: 'mike@internet.app'
})

console.log(push)
