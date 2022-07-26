export default function objectKeys<Obj>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as Array<keyof Obj>;
}
