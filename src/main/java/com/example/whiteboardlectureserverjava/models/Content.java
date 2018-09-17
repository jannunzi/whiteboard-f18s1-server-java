package com.example.whiteboardlectureserverjava.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Content {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String title;
	private String content;
	private String renderAs;
	private String template;
	private List<Content> subContent;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRenderAs() {
		return renderAs;
	}
	public void setRenderAs(String renderAs) {
		this.renderAs = renderAs;
	}
	public String getTemplate() {
		return template;
	}
	public void setTemplate(String template) {
		this.template = template;
	}
	public List<Content> getSubContent() {
		return subContent;
	}
	public void setSubContent(List<Content> subContent) {
		this.subContent = subContent;
	}
}
