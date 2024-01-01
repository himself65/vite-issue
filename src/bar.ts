import { inner } from './inner.js'

export default function bar() {
  inner()
  return 'hello bar'
}
