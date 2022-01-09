export default function useSortProducts(products,sort) {
  
    // sort={sortName:null, sortPrice:null, sortRate:null}
    // sort={sortName:true, sortPrice:null, sortRate:null}
    // sort={sortName:null, sortPrice:null, sortRate:false}
        const {sortName,sortPrice,sortRate}=sort
        let sorted
        sortName!=null?
                sortName===true?
                        sorted=products.sort(function (a, b) {
                        if (a.item_name > b.item_name) {
                            return 1;
                        }
                        if (a.item_name < b.item_name) {
                            return -1;
                        }
                        return 0;
                        })
                        :sorted=products.sort(function (a, b) {
                            if (a.item_name > b.item_name) {
                            return -1;
                            }
                            if (a.item_name < b.item_name) {
                            return 1;
                            }
                            return 0;
                        })
        :sortPrice!=null?
                    sortPrice===true?
                            sorted=products.sort(function (a, b) {
                            if (a.price*100 > b.price*100) {
                                return 1;
                            }
                            if (a.price*100 < b.price*100) {
                                return -1;
                            }
                            return 0;
                            })
                            :sorted=products.sort(function (a, b) {
                                if (a.price*100 > b.price*100) {
                                    return -1;
                                }
                                if (a.price*100 < b.price*100) {
                                return 1;
                                }
                                return 0;
                            })
        :sortRate!=null?
                sortRate===true?
                        sorted=products.sort(function (a, b) {
                        if (a.rate > b.rate) {
                            return 1;
                        }
                        if (a.rate < b.rate) {
                            return -1;
                        }
                        return 0;
                        })
                        :sorted=products.sort(function (a, b) {
                            if (a.rate > b.rate) {
                            return -1;
                            }
                            if (a.rate < b.rate) {
                            return 1;
                            }
                            return 0;
                        })
        :sorted=products
        
        return sorted}
  ;