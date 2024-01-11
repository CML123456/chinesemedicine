const db = uniCloud.database();
export const update = (name,where) => {
	db.collection(name).where(where).update()
}
export const select = (name,where) => {
	db.collection(name).where(where).get()
}
export const add = (name,obj) => {
	db.collection(name).add(obj)
}