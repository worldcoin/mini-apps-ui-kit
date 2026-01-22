export function getTemplate(native) {
  return (variables, { tpl }) => {
    // Only rename props for React Native, keep original for web React
    // to avoid issues with JSX referencing 'props' directly
    if (native) {
      variables.props[0].name = "passedProps";
      // Workaround to fix ref type for React Native
      variables.props[1].typeAnnotation.typeAnnotation.typeParameters.params[0].typeName.name =
        "Svg";
    }

    const useClientDirective = native ? [] : '"use client"';

    return tpl`
${useClientDirective};
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
  return ${variables.jsx};
};
  
${variables.exports};
  `;
  };
}
