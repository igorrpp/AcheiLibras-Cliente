export class Interprete{
    id: string;
    cep: string;
    cpf : string;
    nome: string;
    endereco: string;
    cidade: string;
    estado: string;
    grupo: string;
    username: string;
    telefone: string;
    status: string;
    imagem: string;
    idInterprete:string;
   
    setData(objFirebase : any){
        this.cep = objFirebase.cep;
        this.cpf = objFirebase.cpf;
        this.nome = objFirebase.nome;
        this.endereco = objFirebase.endereco;
        this.grupo = objFirebase.grupo;
        this.username = objFirebase.username;
        this.status = objFirebase.deficiência;
        this.telefone = objFirebase.telefone;
        this.cidade = objFirebase.cidade;
        this.estado  = objFirebase.estado;
        this.status  = objFirebase.status;
   
    }

}


