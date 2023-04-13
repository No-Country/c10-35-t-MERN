import { useState, useEffect } from 'react'
import { helpFetch } from '../Helpers/helpFetch'
import { data } from '../../data/db.json'




 export const useForm = (validationsForm) => {
	const [form, setForm] = useState({})
	const [errors, setErrors] = useState({})
	const [db, setDb] = useState({})
	const [dataToEdit, setDataToEdit] = useState(null)

	const crud = helpFetch()
	let url = 'http://localhost:3000/data'

	useEffect(() => {
		crud.get(url).then(res => {
			if (!res.err) {
				setDb(res)
			} else {
				setDb(null)
			}
		})
	}, [url])

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleBlur = e => {
		handleChange()
		setErrors(validationsForm(form))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validationsForm(form))

		//         if(Object.keys(errors).length===0){
		// setLoading(true);
		// helpFetch()
		// .post('http://localhost:3000/data'),{
		//     body:form,
		//     headers:{
		//         "Content-Type":"application/json",
		//         Accept:"application/json"
		//     }
		// }
		// .then((res)=>{
		//     setLoading(false);
		//     setResponse(true)
		// });
		//         }else{}

		// if (
		// 	!form.nombre ||
		// 	!form.cantidad ||
		// 	!form.costo ||
		// 	!form.total ||
		// 	!form.precio ||
		// 	!form.alerta
		// ) {
		// 	alert('debes ingresar todos los campos')
		// 	return
		// }
		if (form.id === null) {
			createData(form)
		} else {
			updateData(form)
		}

		// handleReset()
	}

	// const handleReset = e => {
	// 	setForm(initialForm)
	// 	setDataToEdit(null)
	// }

	const createData = data => {
		data.id = Date.now

		crud
			.post(url, {
				body: data,
				headers: { 'content-type': 'application/json' },
			})
			.then(res => {
				console.log(res)
				if (!res.err) {
					setDb([...db, res])
				}
			})
	}

	const updateData = data => {
		let endpoint = `${url}/${data.id}`;

		crud
			.put(endpoint, { body: data, headers: { 'content-type': 'application/json' } })
			.then(res => {
				if (!res.err) {
					let newData = db.map(el => (el.id === data.id ? data : el))
					setDb(newData)
				}
			})
	};

	const deleteData = id => {

		let isDelete = confirm(`¿Estas seguro que quieres eliminar ${id}?`)

		if (isDelete) {
            let endpoint = `${url}/${id}`;

            crud.del(endpoint,{ headers: { 'content-type': 'application/json' } })
            .then(res => {

				if (!res.err) {
					
                    let newData = db.filter(el => el.id !== id);

                    setDb(newData);
				}
			})
		}
	}

	return (form,  errors, handleChange, handleBlur, handleSubmit);
}
