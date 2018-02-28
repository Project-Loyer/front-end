let documents = [
    {
        title: 'APELACION Pierri',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2017-10-02 18:31:02',
        owner: 'Burlando',
        caseFile: '011093/2017',
        local : true,
        approved : "Aprobado"
    },
    {
        title: 'DEMANDA Isidoro Gomez',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        date: '2017-08-28 10:11:54',
        owner: 'Sandoval',
        caseFile: '010842/2017',
        local : true,
        approved : "Aprobado"
    },
    {
        title: 'CARTA DOCUMENTO 2',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        date: '2016-03-02 10:42:20',
        owner: 'Burlando',
        caseFile: '000012/2016',
        local : false,
        approved : "Aprobado"
    },
    {
        title: 'CARTA DOCUMENTO 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2016-02-28 10:22:22',
        owner: 'Burlando',
        caseFile: '000012/2016',
        local : false,
        approved : "Aprobado"
    }
];

let caseFiles = [
    {
        id: '011093/2017',
        documents: documents.filter((doc) => doc.caseFile === '011093/2017')
    },
    {
        id: '010842/2017',
        documents: documents.filter((doc) => doc.caseFile === '010842/2017')
    },
    {
        id: '000012/2016',
        documents: documents.filter((doc) => doc.caseFile === '000012/2016')
    }

];


class FilesMock {
    constructor() {
        this.documents = documents;
        this.caseFiles = caseFiles;
    }

    addDocument(doc) {
        doc.local = true;
        this.documents.push(doc);
        for (let i = 0; i < this.caseFiles.length; i++) {
            if (this.caseFiles[i].id === doc.caseFile) {
                this.caseFiles[i].documents.push(doc);
                i = this.caseFiles.length;
            }
        }
    }

    getCaseFile(id) {
        for (let i = 0; i < this.caseFiles.length; i++) {
            if (this.caseFiles[i].id === id) {
                return this.caseFiles[i];
            }
        }
    }

    addCaseFile(file) {
        this.caseFiles.push(file);
    }
}

let nfm = new FilesMock();

export default nfm;