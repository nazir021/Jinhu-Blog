import '@ant-design/compatible/assets/index.css';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Form, Button, Card, Col, Input, Popover, Row, Select, Upload, Icon, message } from 'antd';
import React, { Component, Dispatch } from 'react';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { FormComponentProps } from '@ant-design/compatible/es/form';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import Editor from 'for-editor';
import FooterToolbar from './components/FooterToolbar';
import styles from './style.less'; // const htmlParser = require('react-markdown/plugins/html-parser');

const imageKey = '9e039c26bc57fcbae1edf677d78354e0';
const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;
const fieldLabels = {
  name: '文章名称',
  category: '栏目',
  category_lists: '请选择栏目',
  dateRange: '生效日期',
  type: '专题类型',
  editor: 'MarkDown文章',
  description: '文章描述',
  content: '',
  tags: '请选择标签',
  backgroundImage: '背景图片',
  attachments: '附件上传',
  status: '状态',
};

interface ArticleFormProps extends FormComponentProps {
  dispatch: Dispatch<any>;
  submitting: boolean;
  getFieldsValue: String[];
}



// function beforeUpload(file) {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

function getBase64(img, callback){
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};



class AdvancedForm extends Component<ArticleFormProps> {
  state = {
    loading: false,
    imageUploadUrl:'',
  };

  TagshandleChange = (value: any) => {
    this.props.form.setFields({ tags: { value } });
  };

  handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUploadUrl: `https://image.wangjinhu.com.cn/api/1/upload/?key=${imageKey}&source=${imageUrl}&format=json`,
          loading: false,
        }),
      );
    }
  };

  beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    // const imageBase64 = 
    // this.setState({
    //   imageUploadUrl: `http://mysite.com/api/1/upload/?key=${imageKey}&source=${file.}&format=json`,
    // });
    // console.log(file)
    return isJpgOrPng && isLt2M;
  };

  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;

    if (!errors || errorCount === 0) {
      return null;
    }

    const scrollToField = (fieldKey: string) => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);

      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };

    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }

      const errorMessage = errors[key] || [];
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <CloseCircleOutlined className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errorMessage[0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={(trigger: HTMLElement) => {
            if (trigger && trigger.parentNode) {
              return trigger.parentNode as HTMLElement;
            }

            return trigger;
          }}
        >
          <CloseCircleOutlined />
        </Popover>
        {errorCount}
      </span>
    );
  };

  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        // submit the values
        dispatch({
          type: 'article/createArticle',
          payload: values,
        });
      }
    });
  };

  categorySelectChange = (value: any) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'category/categoryChange',
      payload: value,
    });
  };

  printValue = () => {
    // this.props.form.setFields({
    //   backgroundImage: {
    //     value: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjqiOPpsLnnAhUFTt8KHSNRD-oQPAgH',
    //   },
    // });
    let value = this.props.form.getFieldsValue();
    console.log(JSON.stringify(value));
  };


  render() {
    const {
      form: { getFieldDecorator },
      submitting,
    } = this.props;

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const categoryOptions = (
      <>
        <Option value="xiao">项目</Option>
        <Option value="mao">旅游</Option>
        <Option value="photograph">摄影</Option>
      </>
    );

    // const children: any = [];
    // for (let i = 10; i < 36; i++) {
    //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }

    const formItemLayout = {
      wrapperCol: {
        lg: 24,
        md: 24,
        sm: 24,
      },
    };

    const { imageUrl, imageUploadUrl } = this.state;

    const EditorLayout = {
      wrapperCol: {
        lg: 24,
        md: 24,
        sm: 24,
      },
    };

    return (
      <>
        <PageHeaderWrapper>
          <Card title="文章信息" className={styles.card} bordered={false}>
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={24}>
                <Col lg={16} md={16} sm={24}>
                  <Row gutter={24}>
                    <Col>
                      <Form.Item label={fieldLabels.name} {...formItemLayout}>
                        {getFieldDecorator('name', {
                          rules: [
                            {
                              required: true,
                              message: formatMessage({
                                id: 'article.title',
                              }),
                            },
                          ],
                        })(
                          <Input
                            placeholder={formatMessage({
                              id: 'article.title',
                            })}
                          />,
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col lg={8} md={8} sm={24}>
                      <Form.Item label={fieldLabels.category}>
                        {getFieldDecorator('category', {
                          rules: [
                            {
                              required: true,
                              message: '请选择栏目',
                            },
                          ],
                        })(
                          <Select placeholder="请选择栏目">
                            <Option value="xiao">项目</Option>
                            <Option value="mao">旅游</Option>
                            <Option value="photograph">摄影</Option>
                          </Select>,
                        )}
                      </Form.Item>
                    </Col>
                    <Col lg={8} md={8} sm={24}>
                      <Form.Item label={fieldLabels.type}>
                        {getFieldDecorator('type', {
                          rules: [
                            {
                              required: true,
                              message: '请选择专题',
                            },
                          ],
                        })(
                          <Select placeholder="请选择专题">
                            <Option value="private">机器学习</Option>
                            <Option value="public">前端</Option>
                          </Select>,
                        )}
                      </Form.Item>
                    </Col>
                    <Col lg={8} md={8} sm={24}>
                      <Form.Item label={fieldLabels.status}>
                        {getFieldDecorator('status', {
                          rules: [
                            {
                              required: true,
                              message: '',
                            },
                          ],
                        })(
                          <Select
                            placeholder={formatMessage({
                              id: 'article.status.inform',
                            })}
                          >
                            <Option value="private">机器学习</Option>
                            <Option value="public">前端</Option>
                          </Select>,
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col lg={24} md={24} sm={24}>
                      <Form.Item label={fieldLabels.tags}>
                        {getFieldDecorator('tags', {
                          rules: [
                            {
                              required: true,
                              message: formatMessage({
                                id: 'article.tag',
                              }),
                            },
                          ],
                        })(
                          <div className={styles.container}>
                            <div id="components-select-demo-automatic-tokenization">
                              <Select
                                mode="tags"
                                style={{ width: '100%' }}
                                onChange={this.TagshandleChange}
                                tokenSeparators={[',']}
                              ></Select>
                            </div>
                          </div>,
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col lg={24} md={24} sm={24}>
                      <Form.Item label={fieldLabels.description}>
                        {getFieldDecorator('description', {
                          rules: [
                            {
                              required: true,
                              message: '请输入文章描述',
                            },
                          ],
                        })(<TextArea rows={4} />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col lg={8} md={8} sm={24}>
                  <Row gutter={24}>
                    <Col lg={24} md={24} sm={24}>
                      <div className={styles.container}>
                        <div id="components-upload-demo-avatar">
                          <Form.Item label={fieldLabels.backgroundImage}>
                            {getFieldDecorator('backgroundImage', {
                              rules: [],
                            })(
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                method="POST"
                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                action={this.state.imageUploadUrl}
                                beforeUpload={this.beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: '100%', height: '155px' }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>,
                            )}
                          </Form.Item>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col lg={24} md={24} sm={24}>
                      <Form.Item label={fieldLabels.attachments}>
                        <Dragger>
                          <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                          </p>
                          <p className="ant-upload-text">
                            {formatMessage({
                              id: 'article.attachment.inform',
                            })}
                          </p>
                        </Dragger>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={24}>
                <Form.Item label={fieldLabels.content} {...EditorLayout}>
                  {getFieldDecorator('content', {
                    rules: [
                      {
                        required: true,
                        message: '',
                      },
                    ],
                  })(<Editor />)}
                </Form.Item>
              </Row>
            </Form>
          </Card>
        </PageHeaderWrapper>
        <FooterToolbar>
          {this.getErrorInfo()}
          <Button type="primary" onClick={this.validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </>
    );
  }
}

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['article/createArticle'],
}))(Form.create<ArticleFormProps>()(AdvancedForm));
