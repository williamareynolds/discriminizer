/*
https://stackoverflow.com/a/15710692
 */
const hashString = (s: string): number =>
  s.split('')
    .reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)

/** Hash the keys of an object. */
const hashObject = <O extends Record<string, any>>(obj: O): number =>
  Object.keys(obj)
    .sort()
    .reduce((acc, val) => {
      return acc * 31 + hashString(val)
    }, 23)

export const discriminize = <TagKey extends string>(
  tagKey: TagKey
) => <Tag extends string>(
  r: [Tag, object][]
) => <A extends object>(a: A): A & Record<TagKey, Tag> => {

  if (r.length < 1) throw Error('You must provide at least one object.')

  const hashMap = new Map<number, Tag>()
  r.forEach(([tag, elem]) => {
    if (elem.hasOwnProperty(tagKey)) throw Error('Object already has tag key.')
    hashMap.set(hashObject(elem), tag)
  })

  const hash = hashObject(a)
  const tag = hashMap.get(hash)
  if (tag === undefined) throw Error('No matching hash found for object.')

  return {
    ...a,
    [tagKey]: tag
  } as any
}
