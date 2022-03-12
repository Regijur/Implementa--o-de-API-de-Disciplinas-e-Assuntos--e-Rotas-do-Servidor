const express = require("express")
const routes = express.Router()
const subjects = require('../files/Subjects.json')

routes.get('/', (req, res) => {
    if(subjects.length == 0) return res.status(400).json("Nenhuma disciplina cadastrada").end()
    return res.json(subjects);
})

routes.get('/disciplines', (req, res) => {
    const disciplines = subjects.map((e) => {
        return e.Disciplina
    })
    
    if(disciplines == undefined) return res.status(400).json("Nenhuma disciplina cadastrada").end()
    
    return res.json(disciplines)
})

routes.get('/:disciplineName', (req, res) => {
    const {disciplineName} = req.params
    const discipline = subjects.find((e) => {
        return e.Disciplina == disciplineName
    })

    if(discipline == undefined) return res.status(400).json("Disciplina não cadastrada").end()

    return res.json(discipline)
})

routes.post('/', (req, res) => {
    const disciplina = req.body.Disciplina;
    const assuntos = req.body.Assuntos;

    if(!disciplina || !assuntos){
        return res.status(400).json("Body inválido").end()
    }
    
    if(subjects.find(e => e.Disciplina == req.body.Disciplina) != undefined){
        return res.status(400).json("Elemento já existente").end()
    }

    subjects.push(req.body)
    return res.json(subjects)  

})

routes.put('/', (req, res) => {
    const disciplina = req.body.Disciplina;
    const assuntos = req.body.Assuntos;

    if(!disciplina || !assuntos){
        return res.status(400).json("Body inválido").end()
    }
    
    if(subjects.find(e => e.Disciplina == req.body.Disciplina) != undefined){
        subjects.map(e =>{ 
            if(e.Disciplina == req.body.Disciplina){
                e.Assuntos = assuntos;
            }
        })
        return res.json(subjects)  
    }
    
    return res.status(400).json("Elemento não existente").end()

})

routes.delete('/:discipline', (req, res) => {
    const {discipline} = req.params
    
    for (i = 0; i < subjects.length; i++){
        if(subjects[i].Disciplina == discipline){
            subjects.splice(i,1)
        }
    }   
    
    return res.json(subjects)
})

module.exports = routes