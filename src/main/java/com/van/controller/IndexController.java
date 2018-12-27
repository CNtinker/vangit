package com.van.controller;

import com.van.pojo.Category;
import com.van.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by dzw on 2018/12/20.
 */
@Controller
public class IndexController {
    @Autowired
    private IndexService is;

    @RequestMapping("/index2")
    public String index2(HttpSession session){
        if(session.getAttribute("list")==null) {
            List<Category> list = is.findAllCategory();
            session.setAttribute("list", list);
        }
        return "Product";
    }


}
