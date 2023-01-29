export interface itemInterface {
     id: number
     description: string;
     issues_url: string;
     full_name: string;
     forks_count: number;
     created_at: string;
     html_url: string;
}

export interface itemInCludeLikedInterface extends itemInterface {
     liked: boolean
}

export interface resultInterface {
     status: number
     data: {
          total_count: number;
          items: itemInterface[];
     }
}
