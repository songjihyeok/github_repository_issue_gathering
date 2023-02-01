export interface issueDataInterface {
     id: number
     title: string
     body?: string
     html_url: string
     state: string
}

export interface issueWithRepositoryName extends issueDataInterface {
     repository_name: string
}

